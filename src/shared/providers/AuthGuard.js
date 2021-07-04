import * as React from "react";
import { useQuery } from "react-query";
import { user } from "shared/fetchers";
import { _keyProfile } from "shared/fetchers/user";

const AuthContext = React.createContext(null);
export const AuthGuard = (props) => {
  const { children } = props;
  const [me, setMe] = React.useState(null);
  const [isInitialRender, setInitialRender] = React.useState(false);
  useQuery(_keyProfile, user.profile, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      setMe(res.data);
    },
    onError: () => {
      setMe(null);
    },
    onSettled: () => {
      setInitialRender(true);
    },
  });
  return (
    <AuthContext.Provider value={{ me, setMe, isInitialRender }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuthContext should be wrapped inside <AuthGuard/>");
  }
  return context;
};

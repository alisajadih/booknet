import { useAuthContext } from "./providers/AuthGuard";
import { Redirect } from "react-router-dom";

export const withPermissions = (permissions) => (Component) => (props) => {
  const { me, isInitialRender } = useAuthContext();
  if (!isInitialRender) return null;
  if (permissions === "login") {
    if (!!me) return <Component {...props} />;
    return <Redirect to="/login" />;
  } else return <Component {...props} />;
};

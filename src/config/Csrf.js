import axios from "axios";
import { useQuery } from "react-query";

// const csrfUrl = "http://localhost/sanctum/csrf-cookie";
const csrfUrl = "/sanctum/csrf-cookie";
const fetcher = async () => {
  return await axios.get(csrfUrl);
};
export const Csrf = (props) => {
  const { children } = props;
  useQuery(csrfUrl, fetcher, {
    refetchInterval: false,
    onSuccess: () => {},
  });
  return children;
};

import axios from "axios";
import { token } from "shared/constants";
import { axiosInterceptor } from "./axiosInterceptor";

export const Client = axios.create({
  //   baseURL: "http://localhost/api",
  baseURL: "/api",
});
axiosInterceptor(Client);

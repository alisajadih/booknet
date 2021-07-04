import { Client } from "shared/axios";

export const register = async (user) => {
  const data = await Client.post("/register", user);
  return data;
};

export const login = async (user) => {
  const data = await Client.post("/login", user);
  return data;
};

export const profile = async () => {
  const data = await Client.get("/profile");
  return data;
};

export const updateProfile = async (user) => {
  const data = await Client.post("/profile", { _method: "PUT", ...user });
  return data;
};

export const logout = async () => {
  const data = await Client.post("/logout");
  return data;
};

export const _keyProfile = "profile";

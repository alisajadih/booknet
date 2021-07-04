import { Client } from "shared/axios";

export const get = async (props) => {
  return await Client.get("/category");
};

export const getSingle = async ({ queryKey }) => {
  const [_, categoryId] = queryKey;
  return await Client.get(`/category/${categoryId}`);
};

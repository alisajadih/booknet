import { Client } from "shared/axios";

export const get = async ({ queryKey }) => {
  const [, params] = queryKey;
  const data = await Client.get("/book", { params: { ...params } });
  return data;
};
export const getSingle = async ({ queryKey }) => {
  const [, bookId] = queryKey;
  const data = await Client.get(`/book/${bookId}`);
  return data;
};

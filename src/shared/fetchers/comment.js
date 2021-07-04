import { Client } from "shared/axios";

export const send = async (props) => {
  const { bookId, ...comment } = props;
  const data = await Client.post(`/book/${bookId}/comment`, comment);
  return data
};
export const get = async ({queryKey}) => {
    const [ ,bookId] = queryKey
    return await Client.get(`/book/${bookId}/comment`)
}
import { useFetch } from "../fetchHook";

export const useCreateTopic = () => {
  // eslint-disable-next-line
  return ((body: any) => useFetch().post(body, "topics/create"))
}

export const useGetAllTopics = () => {
  // eslint-disable-next-line
  return (()=>useFetch().get([],'/topics/all'))}

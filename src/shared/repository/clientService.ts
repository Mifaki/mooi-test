import { api } from "./api";
import { ClientResponseI } from "./response-interface";

const getAllClient = async (): Promise<ClientResponseI[]> => {
  const { data } = await api.get("/b5c803b7e0c");
  return data;
};

export { getAllClient };

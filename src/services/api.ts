import axios from "axios";
import { ApiResponse } from "../components/App/App";

const API_KEY = import.meta.env.VITE_APP_UNSPLASH_API_KEY;

const unsplashAPI = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const searchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 10
): Promise<ApiResponse> => {
  const { data } = await unsplashAPI.get<ApiResponse>("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
  return data;
};
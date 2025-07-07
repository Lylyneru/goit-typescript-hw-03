import axios from "axios";

const ACCESS_KEY = "md7P87BnKLn_l3TrTNVdld1d_VSlbRO5QTP03B0jK9A";

export const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });

  return response.data;
};

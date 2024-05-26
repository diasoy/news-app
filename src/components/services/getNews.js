import axios from "axios";

const NEWS_API_BASE_URL = "https://newsapi.org/v2";
const NEWS_API_KEY = "2d52e799bb7a4c61b6f5c71be306305f";

export const getNews = async ({ searchQuery = "technology" }) => {
  try {
    const path = "/everything";
    const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    const endpointURL = `${NEWS_API_BASE_URL}${path}${query}`;

    const res = await axios.get(endpointURL);

    if (res.status === 200) {
      const additionalObj = {
        category: searchQuery,
      };
      const resData = { ...res.data, ...additionalObj };

      return resData;
    }
  } catch (error) {
    console.error("Error getting Tech News: ", error);
  }
};

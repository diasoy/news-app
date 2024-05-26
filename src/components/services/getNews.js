import axios from "axios";

const NEWS_API_BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const NEWS_API_KEY = import.meta.env.VITE_API_KEY;

console.log("NEWS_API_BASE_URL:", NEWS_API_BASE_URL);
console.log("NEWS_API_KEY:", NEWS_API_KEY);

export const getNews = async ({ searchQuery = "technology" }) => {
  try {
    const path = "/everything";
    const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    const endpointURL = `${NEWS_API_BASE_URL}${path}${query}`;

    console.log("Endpoint URL:", endpointURL);

    const res = await axios.get(endpointURL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
    });

    if (res.status === 200) {
      const additionalObj = {
        category: searchQuery,
      };
      const resData = { ...res.data, ...additionalObj };

      return resData;
    } else {
      console.error("Unexpected response status:", res.status);
    }
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
  }
};

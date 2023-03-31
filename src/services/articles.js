import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

const getArticles = async () => {
  const response = await axios.get("/search?query=react");
  return response.data.hits;
};

export { getArticles };

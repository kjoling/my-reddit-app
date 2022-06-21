import axios from "axios";

const API_ROOT = "https://www.reddit.com";

export const getSubreddits = async (subreddit) => {
  const response = await axios.get(`${API_ROOT}${subreddit}.json`);
  const data = response.data;
  console.log(data);
};

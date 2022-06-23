import axios from "axios";

const API_ROOT = "https://www.reddit.com";

export const getSubredditPosts = async (subreddit) => {
  const response = await axios.get(`${API_ROOT}/r/${subreddit}.json`);
  const data = response.data;
  return data.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await axios.get(`${API_ROOT}/subreddits.json`);
  console.log(response.data);
};

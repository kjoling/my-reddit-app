import axios from "axios";

const API_ROOT = "https://www.reddit.com";

export const getSubredditPosts = async (subreddit) => {
  let data;
  if (subreddit === "") {
    const response = await axios.get(`${API_ROOT}/.json`);
    data = response.data;
  } else if (subreddit) {
    const response = await axios.get(`${API_ROOT}/${subreddit}.json`);
    data = response.data;
  }
  // const response = await axios.get(`${API_ROOT}/r/${subreddit}.json`);
  // const data = response.data;
  return data.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await axios.get(`${API_ROOT}/subreddits.json`);
  const data = response.data;
  return data.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await axios.get(`${API_ROOT}${permalink}.json`);

  return response.data[1].data.children.map((subreddit) => subreddit.data);
};

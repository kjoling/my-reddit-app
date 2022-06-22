import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getSubredditPosts } from "../api/reddit";

const API_ROOT = "https://www.reddit.com";

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: "",
  selectedSubreddit: "/r/pics/",
};

export const fetchPosts = createAsyncThunk(
  "redditPosts/fechPosts",
  async () => {
    try {
      const response = await axios.get(getSubredditPosts("soccer"));
    } catch (err) {
      return err.message;
    }
  }
);

const redditSlice = createSlice({
  name: "redditPosts",
  initialState,
  reducers: {
    setPosts: (action, state) => {
      state.posts = action.payload;
    },
    extraReducers: {
      [fetchPosts.pending]: (state, action) => {
        state.isLoading = true;
      },
    },
  },
});

export const selectAllPosts = (state) => state.redditPosts.posts;
export const { setPosts } = redditSlice.actions;
export default redditSlice.reducer;

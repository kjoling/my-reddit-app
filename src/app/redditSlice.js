import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../api/reddit";

const initialState = {
  posts: [],
  error: false,
  status: "idle",
  searchTerm: "",
  selectedSubreddit: "/r/pics/",
};

export const fetchSubredditPosts = createAsyncThunk(
  "redditPosts/fetchSubredditPosts",
  async () => {
    try {
      const response = await getSubredditPosts("soccer");
      return response;
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
      console.log(action.payload);
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [fetchSubredditPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSubredditPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      const posts = action.payload;
      state.posts = posts;
    },
    [fetchSubredditPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectAllPosts = (state) => state.reddit.posts;
export const selectStatus = (state) => state.reddit.status;
export const selectErrorMessage = (state) => state.reddit.error;
export const { setPosts } = redditSlice.actions;
export default redditSlice.reducer;

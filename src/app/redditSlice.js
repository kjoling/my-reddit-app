import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from "../api/reddit";

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
      const postsWithMetadata = response.map((post) => ({
        ...post,
        showingComments: false,
        comments: [], //array filled with obj of comments for specific post
        loadingComments: "idle", // succeeded || failed || loading
        errorComments: null, // error message if there is one
      }));
      return postsWithMetadata;
    } catch (err) {
      return err.message;
    }
  }
);

export const fetchPostComments = createAsyncThunk(
  "redditPosts/fetchPostComments",
  async (permalink) => {
    try {
      const comments = await getPostComments(permalink);
      return comments;
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
    [fetchPostComments.pending]: (state, action) => {
      state.posts[action.payload].loadingComments = "loading";
      state.posts[action.payload].error = false;
    },
    [fetchPostComments.fulfilled]: (state, action) => {
      state.posts[action.payload].comments = action.payload;
      state.posts[action.payload].loadingComments = "succeeded";
      state.posts[action.payload].error = false;
    },
    [fetchPostComments.rejected]: (state, action) => {
      state.posts[action.payload].loadingComments = "failed";
      state.posts[action.payload].error = action.payload;
    },
  },
});

export const selectAllPosts = (state) => state.reddit.posts;
export const selectStatus = (state) => state.reddit.status;
export const selectErrorMessage = (state) => state.reddit.error;
export const selectCommentsErrorMessage = (state) => state.reddit.posts; //access selected post.errorComments

export const { setPosts } = redditSlice.actions;
export default redditSlice.reducer;

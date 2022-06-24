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
  async (subreddit = "soccer") => {
    try {
      const response = await getSubredditPosts(subreddit);
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
  async (permalink, index) => {
    try {
      console.log("in fetch post comments");
      const comments = await getPostComments(permalink);
      console.log(comments);
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
    startGetComments: (state, action) => {
      console.log(action.payload);
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;
      if (!state.posts[action.payload].showingComments) {
        return;
      }
    },
    toggleShowingComments: (state, action) => {
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;
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
      console.log(action.payload);
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;
      state.posts[action.payload].loadingComments = "loading";
      state.posts[action.payload].error = false;
    },
    [fetchPostComments.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.posts[action.payload.index].comments = action.payload;
      state.posts[action.payload.index].loadingComments = "succeeded";
      state.posts[action.payload.index].error = false;
    },
    [fetchPostComments.rejected]: (state, action) => {
      console.log(action.payload);
      state.posts[action.payload].loadingComments = "failed";
      state.posts[action.payload].error = action.payload;
    },
  },
});

export const selectAllPosts = (state) => state.reddit.posts;
export const selectStatus = (state) => state.reddit.status;
export const selectErrorMessage = (state) => state.reddit.error;
//export const selectCommentsErrorMessage = (state) => state.reddit.posts; //access selected post.errorComments

export const { setPosts, toggleShowingComments, startGetComments } =
  redditSlice.actions;
export default redditSlice.reducer;

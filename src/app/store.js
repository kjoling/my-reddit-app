import { configureStore } from "@reduxjs/toolkit";
import redditSlice from "./redditSlice";
import subredditSlice from "./subredditSlice";

export const store = configureStore({
  reducer: {
    reddit: redditSlice,
    subreddits: subredditSlice,
  },
});

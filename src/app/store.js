import { configureStore } from "@reduxjs/toolkit";
import redditSlice from "./redditSlice";

export const store = configureStore({
  reducer: {
    reddit: redditSlice,
  },
});

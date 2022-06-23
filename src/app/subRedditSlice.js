import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit";

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    try {
      const response = await getSubreddits();
      console.log(response);
      return response;
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  subreddits: [],
  status: "idle",
  error: null,
};

const subredditSlice = createSlice({
  name: "subredditts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSubreddits.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSubreddits.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.subreddits = action.payload;
    },
    [fetchSubreddits.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const selectAllSubreddits = (state) => state.subreddits.subreddits;
export const selectSubredditStatus = (state) => state.subreddits.status;
export const selectSubredditErrorMessage = (state) => state.subreddits.error;
export default subredditSlice.reducer;

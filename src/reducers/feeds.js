import { createSlice } from "@reduxjs/toolkit";
import { feedsServices } from "../services/feeds/feeds";

const initialState = [];

const feedsReducers = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload.comments);
      return [...state, action.payload];
    },
    addComment: (state, action) => {
      console.log(state);
      return [...state, action.payload];
    },
  },
});

export const feedsData = {
  get: (state) => state.feeds,
};
export const { add } = feedsReducers.actions;
export const { addComment } = feedsReducers.actions;
export default feedsReducers.reducer;

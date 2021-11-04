import { createSlice } from "@reduxjs/toolkit";
import { feedsServices } from "../services/feeds/feeds";

const initialState = [];
const addFeed = (state, action) => {
  return [...state, action.payload];
};
const addFComment = (state, action) => {
  console.log(action.payload.feedIndex)
  state[action.payload.feedIndex].comments.push(action.payload);
};

const feedsReducers = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    add: addFeed,
    addComment: addFComment,
  },
});

export const feedsData = {
  get: (state) => state.feeds,
};
export const { add } = feedsReducers.actions;
export const { addComment } = feedsReducers.actions;
export default feedsReducers.reducer;

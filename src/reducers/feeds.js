import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const reducers = {
  addFeed: (state, action) => {
    return [...state, action.payload];
  },
  addFComment: (state, action) => {
    state[action.payload.feedIndex].comments.push(action.payload);
  },
  addFFiles: (state, action) => {
    state[action.payload.feedIndex].images.push(action.payload);
  },
};

const feedsReducers = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    add: reducers.addFeed,
    addComment: reducers.addFComment,
    addFiles: reducers.addFFiles,
  },
});

export const feedsData = {
  get: (state) => state.feeds,
};
export const { add, addComment, addFiles } = feedsReducers.actions;
export default feedsReducers.reducer;

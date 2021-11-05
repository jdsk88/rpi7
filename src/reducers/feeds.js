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
    state[action.payload.feedIndex].images.forEach(element => {
      for (var p  of element.entries()){
        console.log(p[0],p[1])
      }
    });
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

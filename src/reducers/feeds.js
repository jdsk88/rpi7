import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FeedsServices } from "../services/api/feed/feed";

const initialState = [];

export const addFeed = createAsyncThunk("feeds/create", (data) => {
  const response = FeedsServices.createFeed(data).then((r) => {
    return r.data;
  });
  return response;
});

export const addFeedFiles = createAsyncThunk("feed/addFiles", (files) => {
  const response = FeedsServices.upload(files);
  return response;
});
export const addFComment = createAsyncThunk("feed/addComments", (data) => {
  const response = FeedsServices.addFComments(data);
  return response;
});

export const fetchFeeds = createAsyncThunk("feeds", async (thunkAPI) => {
  const response = await FeedsServices.getFeeds();
  return response.data;
});

const reducers = {
  addFeed: (state, action) => {
    return [...state, action.payload];
  },
  addFComment: (state, action) => {
    state[action.payload.feedIndex].comments.push(action.payload);
  },
  addFFiles: (state, action) => {
    state[action.payload.feedIndex].images.forEach((element) => {
      for (var p of element.entries()) {
        console.log(p[0], p[1]);
      }
    });
  },
};

const feedsReducers = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    // add: reducers.addFeed,
    // addComment: reducers.addFComment,
    addFiles: reducers.addFFiles,
  },
  extraReducers: {
    [addFeed.fulfilled.type]: (state, action) => {
      return [...state, action.payload];
    },
    [addFComment.fulfilled.type]: (state, action) => {
      state[action.payload.feedIndex].comments.push(action.payload);
    },
    [fetchFeeds.fulfilled.type]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        feedsData: action.payload,
      };
    },
  },
});

export const feedsData = {
  get: (state) => state.feeds,
};
export const { add, addComment, addFiles } = feedsReducers.actions;
export default feedsReducers.reducer;

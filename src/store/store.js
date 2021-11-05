import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user";
import feedsReducer from "../reducers/feeds";

export const store = configureStore({
  reducer: {
    user: userReducer,
    feeds: feedsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

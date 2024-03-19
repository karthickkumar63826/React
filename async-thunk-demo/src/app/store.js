import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/usersSlice";
import contentReducer from "../reducers/contentSlice";

export const store = configureStore({
  reducer: {
    userStore: userReducer,
    contentStore: contentReducer,
  },
});

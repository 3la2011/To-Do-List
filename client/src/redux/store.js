import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loadingReducer";
import userReducer from "./userReducer";
import tasksReducer from "./tasksReducer";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    user: userReducer,
    tasks: tasksReducer,
  },
});

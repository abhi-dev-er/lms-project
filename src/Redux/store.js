import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    // auth: authSliceReducers
  },
  devTools: true,
});

export default store;

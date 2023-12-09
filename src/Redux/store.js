import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "./Slices/AuthSlice";
import courseSliceReducer from "./Slices/CourseSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducers,
    course: courseSliceReducer
  },
  devTools: true,
});

export default store;

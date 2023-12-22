import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "./Slices/AuthSlice";
import courseSliceReducer from "./Slices/CourseSlice";
import RazorpaySliceReducer from "./Slices/RazorpaySlice";

const store = configureStore({
  reducer: {
    // auth: authSliceReducers,
    course: courseSliceReducer,
    // razorpay: RazorpaySliceReducer,
  },
  devTools: true,
});

export default store;

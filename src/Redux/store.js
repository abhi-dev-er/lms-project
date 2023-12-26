import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "./Slices/AuthSlice";
import courseSliceReducer from "./Slices/CourseSlice";
import RazorpaySliceReducer from "./Slices/RazorpaySlice";
import lectureSliceReducer from "./Slices/LectureSlice";

const store = configureStore({
  reducer: {
    // auth: authSliceReducers,
    course: courseSliceReducer,
    // razorpay: RazorpaySliceReducer,
    lecture: lectureSliceReducer,
  },
  devTools: true,
});

export default store;

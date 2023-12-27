import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstence from "../../Helpers/AxiosInstence";

const initialState = {
  lectures: [],
};

export const getCoursesLecture = createAsyncThunk(
  "/course/lecture/get",
  async (cid) => {
    try {
      const response = axiosInstence.get(`/course/${cid}`);
      toast.promise(response, {
        loading: "Fetching course lectures",
        success: "Courses Fetched Successfully",
        error: "Failed to load Lectures",
      });
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const addCoursesLecture = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    try {
      const formData = new FormData();
      formData.append("lecture", data.lecture);
      formData.append("title", data.title);
      formData.append("description", data.description);
      const response = axiosInstence.post(`/course/${data.id}`, formData);
      toast.promise(response, {
        loading: "adding course lectures",
        success: "Courses added Successfully",
        error: "Failed to add the Lectures",
      });
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const deleteCoursesLecture = createAsyncThunk(
  "/course/lecture/delete",
  async (data) => {
    try {
      const response = axiosInstence.delete(
        `/course?courseId=${data.courseId}&lecureId=${data.lectureId}`
      );
      toast.promise(response, {
        loading: "deleting course lectures",
        success: "Courses deleted Successfully",
        error: "Failed to delete the Lectures",
      });
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoursesLecture.fulfilled, (state, action) => {
        state.lectures = action?.payload?.lectures;
      })
      .addCase(addCoursesLecture.fulfilled, (state, action) => {
        state.lectures = action?.payload?.course?.lectures;
      });
  },
});

export default lectureSlice.reducer;

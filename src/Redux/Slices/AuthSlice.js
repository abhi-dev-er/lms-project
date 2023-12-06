import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstence from "../../Helpers/AxiosInstence";

export const intialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstence.post("user/register", data);
    toast.promise(res, {
      loading: "wait! creating Your Account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to Create Account!",
    });
    return (await res). data;
    
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});
const authSlice = createSlice({
  name: "auth",
  intialState,
  reducers: {},
});

// export const {} = authSlice.actions;
export default authSlice.reducer;

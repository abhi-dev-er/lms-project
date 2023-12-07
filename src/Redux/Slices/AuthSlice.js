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

export const login = createAsyncThunk("/auth/login", async (data) => {
  try {
    const res = axiosInstence.post("user/login", data);
    toast.promise(res, {
      loading: "wait! Login Your Account....",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to login....",
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
  extraReducers: (builder)=>{
    builder.addCase(login.fulfilled, (state, action) =>{
      localStorage.setItem("data", JSON.stringify(action?.payload?.user));
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem("role", action?.payload?.user?.role);
      state.isLoggedIn = true;
      state.data = action?.payload?.user;
      state.role =action?.payload?.user?.role;

    })
  }
});

// export const {} = authSlice.actions;
export default authSlice.reducer;

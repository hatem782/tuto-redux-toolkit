import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPostes = createAsyncThunk("counter/GetPostes", async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
});

const initialState = {
  value: 0,
  profile: {},
  loading: false,
  error: null,
  postes: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.postes = action.payload;
    },
  },
  extraReducers: (builder) => {
    // ####################### GetPostes #######################
    builder
      .addCase(GetPostes.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.postes = [];
      })
      .addCase(GetPostes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.postes = action.payload.data;
      })
      .addCase(GetPostes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.postes = [];
      });
    // ####################### GetPostes #######################
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

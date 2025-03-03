import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchApi = createAsyncThunk("FetchApi", async () => {
  await axios.get("http://localhost:3000/cart").then((data) => {
    return data.data;
  });
});

export const ApiSlice = createSlice({
  name: "ApiSlice",
  initialState: { data: [], loading: true, count: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addcase(FetchApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addcase(FetchApi.Fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export default ApiSlice.reducer;

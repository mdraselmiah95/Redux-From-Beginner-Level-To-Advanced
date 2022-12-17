import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const getProducts = createAsyncThunk("products/getProduct", async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = res.json();
  return data.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {},
});

export default productsSlice.reducer;

import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItem, updateItem, deleteItem } from "./cartApi";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsync = createAction("cart/fetchItems/pending");
export const fetchAsyncFulfilled = createAction("cart/fetchItems/fulfilled");
export const addAsync = createAction("cart/addItem/pending");
export const addAsyncFulfilled = createAction("cart/addItem/fulfilled");

export const deleteAsync = createAction("cart/deleteItem/fulfilled");
export const updateAsync = createAction("cart/updateItem/fulfilled");

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncFulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(addAsyncFulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(deleteAsync, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(updateAsync, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        console.log(index, action.payload);
        state.items.splice(index, 1, action.payload);
      });
  },
});

// export const { } = cartSlice.actions;

export default cartSlice.reducer;

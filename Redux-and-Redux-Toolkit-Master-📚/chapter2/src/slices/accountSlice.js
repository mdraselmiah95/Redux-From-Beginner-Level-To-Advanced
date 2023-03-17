import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 0,
};

export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    return data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.pending, (state, action) => {
        state.pending = true;
        state.fulfilled = false;
      })
      .addCase(getUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.fulfilled = true;
        state.pending = false;
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export const { decrement, increment, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;

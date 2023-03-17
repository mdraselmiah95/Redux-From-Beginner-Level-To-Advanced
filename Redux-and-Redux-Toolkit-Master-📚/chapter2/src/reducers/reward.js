import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmount");

const initialState = {
  reward: 16,
};

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.reward++;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.reward += action.payload;
    });
});

export default rewardReducer;

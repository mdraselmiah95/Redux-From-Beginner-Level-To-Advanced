import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");

const initialState = {
  reward: 16,
};

const rewardReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.reward++;
  });
});

export default rewardReducer;

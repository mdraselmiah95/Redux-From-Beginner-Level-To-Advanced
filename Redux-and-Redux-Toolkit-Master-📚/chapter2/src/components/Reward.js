import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducers/reward";

const Reward = () => {
  const dispatch = useDispatch();
  const reward = useSelector((state) => state.reward.reward);

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total point : {reward}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        {/* <button onClick={() => dispatch(incrementByAmount(7))}>
          IncrementBySeven +
        </button> */}
      </div>
    </div>
  );
};

export default Reward;

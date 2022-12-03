import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    }
    if (action.type === "DECREMENT") {
      return state - action.payload.count;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>{state}</h2>
      </div>
      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
      >
        INCREMENT
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}
      >
        DECREMENT
      </button>
    </div>
  );
};

export default Counter;

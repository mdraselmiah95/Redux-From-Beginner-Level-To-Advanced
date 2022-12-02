import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parents = () => {
  const { count } = useContext(COUNTER_CONTEXT);

  return (
    <div>
      <div>
        <h1>Parents</h1>
        <h2>{count}</h2>
      </div>
      <div>
        <Child />
      </div>
    </div>
  );
};

export default Parents;
<h2>This is cool.</h2>;

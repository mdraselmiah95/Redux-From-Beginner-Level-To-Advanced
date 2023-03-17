import React, { useState } from "react";

const Bonus = () => {
  const [points, setPoints] = useState({ value: 0 });

  const increment = () => {
    setPoints({ value: points.value + 1 });
  };
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Amount : ${points.value}</h3>
        <h3>Total point : </h3>

        <button onClick={increment}>Increment +</button>
      </div>
    </div>
  );
};

export default Bonus;

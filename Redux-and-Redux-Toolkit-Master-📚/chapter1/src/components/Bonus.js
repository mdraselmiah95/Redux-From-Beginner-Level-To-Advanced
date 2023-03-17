import React, { useState } from "react";

const Bonus = () => {
  const [bonus, setBonus] = useState({ points: 0 });

  const increment = () => {
    setBonus({ points: bonus.points + 1 });
  };
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Amount : $</h3>
        <h3>Total point :{bonus.points} </h3>

        <button onClick={increment}>Increment +</button>
      </div>
    </div>
  );
};

export default Bonus;

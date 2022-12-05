import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, serProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="grid grid-cols-1 mx-auto my-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14">
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;

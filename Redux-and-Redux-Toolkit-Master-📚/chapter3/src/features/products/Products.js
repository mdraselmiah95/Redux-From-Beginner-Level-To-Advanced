import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { fetchAsync } from "./productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "300px", height: "220px" }}
            />
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

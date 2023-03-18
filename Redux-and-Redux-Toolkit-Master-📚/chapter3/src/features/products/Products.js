import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dna } from "react-loader-spinner";
import "./Products.css";
import { fetchAsync } from "./productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          alignItems: "center",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {status === "loading" ? (
          <Dna
            visible={true}
            height="150"
            width="1500"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        ) : null}
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

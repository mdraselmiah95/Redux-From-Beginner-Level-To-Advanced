import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = (
      <div className="justify-items-center	justify-center">
        <div className="justify-center animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    content = <p>Something went wrong 💥</p>;
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>Product List is Empty ⚫</p>;
  }

  if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;

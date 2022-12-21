import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="relative flex flex-col p-3 text-indigo-900 border shadow-lg rounded-3xl">
      {pathname.includes("cart") && (
        <div className="absolute grid w-8 h-8 font-bold text-white bg-indigo-500 rounded-full place-items-center top-2 right-2 ">
          <p> {product.quantity} </p>
        </div>
      )}
      <div className="mx-auto h-52 w-52">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="mb-3 font-semibold text-center">Rating: {product.rating}</p>
      <div className="flex-1 ">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return (
              <li key={feature} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex-1 px-2 py-1 text-white bg-indigo-500 rounded-full text-bold"
          >
            Add to cart
          </button>
        )}

        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="px-2 py-1 bg-indigo-500 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(removeFromCart(product))}
            title="Remove"
            className="flex justify-between flex-1 p-1 px-3 text-white bg-red-500 rounded-full"
          >
            <p>Remove</p>
            <MdDeleteForever size="25" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

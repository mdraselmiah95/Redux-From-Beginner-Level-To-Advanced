import React from "react";
import { BiListPlus, AiOutlineDelete } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col p-3 text-indigo-900 border shadow-lg rounded-3xl"
      key={product.id}
    >
      <div className="mx-auto h-52 w-52">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="mb-3 font-semibold text-center">Rating: {product.rating}</p>
      <div className="flex-1 ">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, index) => {
            return (
              <li key={index} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        <button
          onClick={() => dispatch(removeFromCart(product))}
          className="flex-1 px-2 py-1 text-white bg-indigo-500 rounded-full text-bold"
        >
          <AiOutlineDelete />
        </button>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="flex-1 px-2 py-1 text-white bg-indigo-500 rounded-full text-bold"
        >
          Add to cart
        </button>
        <button
          title="Add to wishlist"
          className="px-2 py-1 bg-indigo-500 rounded-full"
        >
          <BiListPlus className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

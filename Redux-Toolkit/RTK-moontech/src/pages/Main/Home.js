import React from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch } from "react-redux";
import { toggle, toggleBands } from "../../features/filter/filterSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();
  const products = data?.data;

  // const activeClass = "text-white  bg-indigo-500 border-white";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-32 h-32 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto my-10 max-w-7xl gap-14">
      <div className="flex justify-end gap-5 mb-10">
        <button
          className={`border px-3 py-2 rounded-full font-semibold `}
          onClick={() => dispatch(toggle())}
        >
          In Stock
        </button>
        <button
          onClick={() => {
            dispatch(toggleBands("amd"));
          }}
          className={`border px-3 py-2 rounded-full font-semibold $`}
        >
          AMD
        </button>
        <button
          onClick={() => {
            dispatch(toggleBands("intel"));
          }}
          className={`border px-3 py-2 rounded-full font-semibold $`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

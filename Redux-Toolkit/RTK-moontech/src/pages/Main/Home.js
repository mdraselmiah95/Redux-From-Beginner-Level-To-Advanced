import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch } from "react-redux";
import { toggle, toggleBands } from "../../features/filter/filterSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  // const filter = useSelector((state) => state.filter);
  // const { products, isLoading } = useSelector((state) => state.products);
  // const { brands, stock } = filter;

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;

  if (isLoading) {
    content = (
      <div className="flex items-center justify-center ">
        <div className="w-32 h-32 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products.length && filter.stock) {
    content = products
      .filter((product) => product.status === true)
      .map((product) => <ProductCard key={product.model} product={product} />);
  }

  if (products.length && (filter.stock || filter.brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }

  return (
    <div className="mx-auto my-10 max-w-7xl gap-14">
      <div className="flex justify-end gap-5 mb-10">
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          } `}
          onClick={() => dispatch(toggle())}
        >
          In Stock
        </button>
        <button
          onClick={() => {
            dispatch(toggleBands("amd"));
          }}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => {
            dispatch(toggleBands("intel"));
          }}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("intel") ? activeClass : null
          }`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;

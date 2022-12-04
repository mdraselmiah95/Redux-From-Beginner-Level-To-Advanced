import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  initialState,
  productReducer,
} from "../state/ProductState/ProductReducer";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const [] = useReducer(productReducer, initialState);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const value = {
    data,
  };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;

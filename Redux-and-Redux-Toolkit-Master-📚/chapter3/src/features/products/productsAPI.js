import axios from "axios";

export function fetchProducts() {
  return axios.get("/products");
}

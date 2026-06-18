import axios from "axios";
// json-server serves resources at the root by default (e.g. /Product, /Category)
// Ensure the base URL points to the json-server port without additional path prefixes.
const API = axios.create({ baseURL: "http://localhost:8080" });

export const getCategories = () => API.get("/Category");
export const getProducts = () => API.get("/Product");
export const removeProduct = (id) => API.delete(`/Product/${id}`);
export const addProduct = (product) => API.post("/Product", product);
export const getProductById = (id) => API.get(`/Product/${id}`);
export const updateProduct = (id, product) => API.put(`/Product/${id}`, product);

import apiService from "./api";

export const getProducts = async (parameters) => (await apiService.get("/products", parameters)).data;

export const getProduct = async (id) => (await apiService.get(`/products/${id}`)).data;

export const createProduct = async (request) => (await apiService.post("/products", request)).data;

export const updateProduct = async (id, request) => (await apiService.put(`/products/${id}`, request)).data;

export const deleteProduct = async (id) => (await apiService.delete(`/products/${id}`)).data;

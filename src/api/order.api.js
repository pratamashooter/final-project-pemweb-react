import apiService from "./api";

export const getOrders = async (parameters) => (await apiService.get("/orders", parameters)).data;

export const getOrder= async (id) => (await apiService.get(`/orders/${id}`)).data;

export const createOrder = async (request) => (await apiService.post("/orders", request)).data;

export const updateOrder = async (id, request) => (await apiService.put(`/orders/${id}`, request)).data;

export const deleteOrder = async (id) => (await apiService.delete(`/orders/${id}`)).data;

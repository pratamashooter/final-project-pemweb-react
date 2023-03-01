import apiService from "./api";

export const getExamples = async (parameters) => (await apiService.get("/example", parameters)).data;

export const getExample = async (id) => (await apiService.get(`/example/${id}`)).data;

export const createExample = async (request) => (await apiService.post("/example", request)).data;

export const updateExample = async (id, request) => (await apiService.post(`/example/${id}`, request)).data;

export const deleteExample = async (id) => (await apiService.delete(`/example/${id}`)).data;

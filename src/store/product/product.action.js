import { createAction } from "../../utils/reducer.utils";

import PRODUCT_ACTION_TYPES from "./product.type";

export const setProducts = (products) => createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products);

export const setIsProductsHasMore = (isProductsHasMore) =>
  createAction(PRODUCT_ACTION_TYPES.SET_IS_PRODUCTS_HAS_MORE, isProductsHasMore);

export const setFetchProductsSearch = (fetchProductsSearch) =>
  createAction(PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_SEARCH, fetchProductsSearch);

export const setFetchProductsPage = (fetchProductsPage) =>
  createAction(PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_PAGE, fetchProductsPage);

export const setFetchProductsPerPage = (fetchProductsPerPage) =>
  createAction(PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_PER_PAGE, fetchProductsPerPage);

export const setFetchProductsLoading = (fetchProductsLoading) =>
  createAction(PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_LOADING, fetchProductsLoading);

export const setFetchProductsSuccess = (fetchProductsSuccess) =>
  createAction(PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_SUCCESS, fetchProductsSuccess);

export const setFetchProductsFailed = (fetchProductsFailed) =>
  createAction(PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_FAILED, fetchProductsFailed);

export const appendProducts = (products) => createAction(PRODUCT_ACTION_TYPES.APPEND_PRODUCTS, products);

export const fetchProductsStart = () => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START);

export const setProduct = (product) => createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT, product);

export const setFetchProductLoading = (fetchProductLoading) =>
  createAction(PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCT_LOADING, fetchProductLoading);

export const setFetchProductSuccess = (fetchProductSuccess) =>
  createAction(PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCT_SUCCESS, fetchProductSuccess);

export const setFetchProductFailed = (fetchProductFailed) =>
  createAction(PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCT_FAILED, fetchProductFailed);

export const fetchProductStart = (id) => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START, id);

export const setCreateProductLoading = (createProductLoading) =>
  createAction(PRODUCT_ACTION_TYPES.SET_CREATE_PRODUCT_LOADING, createProductLoading);

export const setCreateProductSuccess = (createProductSuccess) =>
  createAction(PRODUCT_ACTION_TYPES.SET_CREATE_PRODUCT_SUCCESS, createProductSuccess);

export const setCreateProductFailed = (createProductFailed) =>
  createAction(PRODUCT_ACTION_TYPES.SET_CREATE_PRODUCT_FAILED, createProductFailed);

export const createProductStart = (request) => createAction(PRODUCT_ACTION_TYPES.CREATE_PRODUCT_START, request);

export const setUpdateProductLoading = (updateProductLoading) =>
  createAction(PRODUCT_ACTION_TYPES.SET_UPDATE_PRODUCT_LOADING, updateProductLoading);

export const setUpdateProductSuccess = (updateProductSuccess) =>
  createAction(PRODUCT_ACTION_TYPES.SET_UPDATE_PRODUCT_SUCCESS, updateProductSuccess);

export const setUpdateProductFailed = (updateProductFailed) =>
  createAction(PRODUCT_ACTION_TYPES.SET_UPDATE_PRODUCT_FAILED, updateProductFailed);

export const updateProductStart = (id, request) =>
  createAction(PRODUCT_ACTION_TYPES.UPDATE_PRODUCT_START, { id, request });

export const setDeleteProductLoading = (deleteProductLoading) =>
  createAction(PRODUCT_ACTION_TYPES.SET_DELETE_PRODUCT_LOADING, deleteProductLoading);

export const setDeleteProductSuccess = (deleteProductSuccess) =>
  createAction(PRODUCT_ACTION_TYPES.SET_DELETE_PRODUCT_SUCCESS, deleteProductSuccess);

export const setDeleteProductFailed = (deleteProductFailed) =>
  createAction(PRODUCT_ACTION_TYPES.SET_DELETE_PRODUCT_FAILED, deleteProductFailed);

export const deleteProductStart = (id) => createAction(PRODUCT_ACTION_TYPES.DELETE_PRODUCT_START, id);

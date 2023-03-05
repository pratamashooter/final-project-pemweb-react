import { createAction } from "../../utils/reducer.utils";

import ORDER_ACTION_TYPES from "./order.type";

export const setOrders = (orders) => createAction(ORDER_ACTION_TYPES.SET_ORDERS, orders);

export const setIsOrdersHasMore = (isOrdersHasMore) =>
  createAction(ORDER_ACTION_TYPES.SET_IS_ORDERS_HAS_MORE, isOrdersHasMore);

export const setFetchOrdersSearch = (fetchOrdersSearch) =>
  createAction(ORDER_ACTION_TYPES.SET_FETCH_ORDERS_SEARCH, fetchOrdersSearch);

export const setFetchOrdersPage = (fetchOrdersPage) =>
  createAction(ORDER_ACTION_TYPES.SET_FETCH_ORDERS_PAGE, fetchOrdersPage);

export const setFetchOrdersPerPage = (fetchOrdersPerPage) =>
  createAction(ORDER_ACTION_TYPES.SET_FETCH_ORDERS_PER_PAGE, fetchOrdersPerPage);

export const setFetchOrdersLoading = (fetchOrdersLoading) =>
  createAction(ORDER_ACTION_TYPES.SET_FETCH_ORDERS_LOADING, fetchOrdersLoading);

export const setFetchOrdersSuccess = (fetchOrdersSuccess) =>
  createAction(ORDER_ACTION_TYPES.SET_FETCH_ORDERS_SUCCESS, fetchOrdersSuccess);

export const setFetchOrdersFailed = (fetchOrdersFailed) =>
  createAction(ORDER_ACTION_TYPES.SET_FETCH_ORDERS_FAILED, fetchOrdersFailed);

export const appendOrders = (orders) => createAction(ORDER_ACTION_TYPES.APPEND_ORDERS, orders);

export const fetchOrdersStart = () => createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_START);

export const setOrder = (order) => createAction(ORDER_ACTION_TYPES.SET_ORDER, order);

export const setFetchOrderLoading = (fetchOrderLoading) =>
  createAction(ORDER_ACTION_TYPES.SET_FETCH_ORDER_LOADING, fetchOrderLoading);

export const setFetchOrderSuccess = (fetchOrderSuccess) =>
  createAction(ORDER_ACTION_TYPES.SET_FETCH_ORDER_SUCCESS, fetchOrderSuccess);

export const setFetchOrderFailed = (fetchOrderFailed) =>
  createAction(ORDER_ACTION_TYPES.SET_FETCH_ORDER_FAILED, fetchOrderFailed);

export const fetchOrderStart = (id) => createAction(ORDER_ACTION_TYPES.FETCH_ORDER_START, id);

export const setCreateOrderLoading = (createOrderLoading) =>
  createAction(ORDER_ACTION_TYPES.SET_CREATE_ORDER_LOADING, createOrderLoading);

export const setCreateOrderSuccess = (createOrderSuccess) =>
  createAction(ORDER_ACTION_TYPES.SET_CREATE_ORDER_SUCCESS, createOrderSuccess);

export const setCreateOrderFailed = (createOrderFailed) =>
  createAction(ORDER_ACTION_TYPES.SET_CREATE_ORDER_FAILED, createOrderFailed);

export const createOrderStart = (request) => createAction(ORDER_ACTION_TYPES.CREATE_ORDER_START, request);

export const setUpdateOrderLoading = (updateOrderLoading) =>
  createAction(ORDER_ACTION_TYPES.SET_UPDATE_ORDER_LOADING, updateOrderLoading);

export const setUpdateOrderSuccess = (updateOrderSuccess) =>
  createAction(ORDER_ACTION_TYPES.SET_UPDATE_ORDER_SUCCESS, updateOrderSuccess);

export const setUpdateOrderFailed = (updateOrderFailed) =>
  createAction(ORDER_ACTION_TYPES.SET_UPDATE_ORDER_FAILED, updateOrderFailed);

export const updateOrderStart = (id, request) =>
  createAction(ORDER_ACTION_TYPES.UPDATE_ORDER_START, { id, request });

export const setDeleteOrderLoading = (deleteOrderLoading) =>
  createAction(ORDER_ACTION_TYPES.SET_DELETE_ORDER_LOADING, deleteOrderLoading);

export const setDeleteOrderSuccess = (deleteOrderSuccess) =>
  createAction(ORDER_ACTION_TYPES.SET_DELETE_ORDER_SUCCESS, deleteOrderSuccess);

export const setDeleteOrderFailed = (deleteOrderFailed) =>
  createAction(ORDER_ACTION_TYPES.SET_DELETE_ORDER_FAILED, deleteOrderFailed);

export const deleteOrderStart = (id) => createAction(ORDER_ACTION_TYPES.DELETE_ORDER_START, id);

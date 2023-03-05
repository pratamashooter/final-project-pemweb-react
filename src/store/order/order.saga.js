import { takeLatest, put, all, call, select } from "redux-saga/effects";

import ORDER_ACTION_TYPES from "./order.type";

import {
  appendOrders,
  setCreateOrderFailed,
  setCreateOrderLoading,
  setCreateOrderSuccess,
  setDeleteOrderFailed,
  setDeleteOrderLoading,
  setDeleteOrderSuccess,
  setFetchOrderFailed,
  setFetchOrderLoading,
  setFetchOrdersFailed,
  setFetchOrdersLoading,
  setFetchOrdersPage,
  setFetchOrdersSuccess,
  setFetchOrderSuccess,
  setIsOrdersHasMore,
  setOrder,
  setOrders,
  setUpdateOrderFailed,
  setUpdateOrderLoading,
  setUpdateOrderSuccess,
} from "./order.action";
import { getFetchOrdersPage, getFetchOrdersPerPage, getFetchOrdersSearch } from "./order.selector";

import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from "../../api/order.api";

export function* _getOrders() {
  try {
    yield put(setFetchOrdersLoading(true));

    const search = yield select(getFetchOrdersSearch);
    const page = yield select(getFetchOrdersPage);
    const per_page = yield select(getFetchOrdersPerPage);

    const parameters = { search, page, per_page };

    const {
      meta: { message },
      data: orders,
    } = yield call(getOrders, parameters);

    yield put(setIsOrdersHasMore(orders.length > 0));

    if (page > 1) {
      yield put(appendOrders(orders));
    } else {
      yield put(setOrders(orders));
    }

    yield put(setFetchOrdersSuccess(message));
    yield put(setFetchOrdersLoading(false));
  } catch (error) {
    yield put(setFetchOrdersFailed(error));
    yield put(setFetchOrdersLoading(false));
  }
}

export function* _getOrder({ payload: id }) {
  try {
    yield put(setFetchOrderLoading(true));

    const {
      meta: { message },
      data: order,
    } = yield call(getOrder, id);

    yield put(setOrder(order));

    yield put(setFetchOrderSuccess(message));
    yield put(setFetchOrderLoading(false));
  } catch (error) {
    yield put(setFetchOrderFailed(error));
    yield put(setFetchOrderLoading(false));
  }
}

export function* _createOrder({ payload: request }) {
  try {
    yield put(setCreateOrderLoading(true));

    const {
      meta: { message },
    } = yield call(createOrder, request);

    yield put(setCreateOrderSuccess(message));
    yield put(setCreateOrderLoading(false));

    yield put(setFetchOrdersPage(1));
    yield call(_getOrders);
  } catch (error) {
    yield put(setCreateOrderFailed(error));
    yield put(setCreateOrderLoading(false));
  }
}

export function* _updateOrder({ payload: { id, request } }) {
  try {
    yield put(setUpdateOrderLoading(true));

    const {
      meta: { message },
    } = yield call(updateOrder, id, request);

    yield put(setUpdateOrderSuccess(message));
    yield put(setUpdateOrderLoading(false));

    yield put(setFetchOrdersPage(1));
    yield call(_getOrders);
  } catch (error) {
    yield put(setUpdateOrderFailed(error));
    yield put(setUpdateOrderLoading(false));
  }
}

export function* _deleteOrder({ payload: id }) {
  try {
    yield put(setDeleteOrderLoading(true));

    const {
      meta: { message },
    } = yield call(deleteOrder, id);

    yield put(setDeleteOrderSuccess(message));
    yield put(setDeleteOrderLoading(false));

    yield put(setFetchOrdersPage(1));
    yield call(_getOrders);
  } catch (error) {
    yield put(setDeleteOrderFailed(error));
    yield put(setDeleteOrderLoading(false));
  }
}

export function* onFetchOrdersStart() {
  yield takeLatest(ORDER_ACTION_TYPES.FETCH_ORDERS_START, _getOrders);
}

export function* onFetchOrderStart() {
  yield takeLatest(ORDER_ACTION_TYPES.FETCH_ORDER_START, _getOrder);
}

export function* onCreateOrderStart() {
  yield takeLatest(ORDER_ACTION_TYPES.CREATE_ORDER_START, _createOrder);
}

export function* onUpdateOrderStart() {
  yield takeLatest(ORDER_ACTION_TYPES.UPDATE_ORDER_START, _updateOrder);
}

export function* onDeleteOrderStart() {
  yield takeLatest(ORDER_ACTION_TYPES.DELETE_ORDER_START, _deleteOrder);
}

export function* orderSaga() {
  yield all([
    call(onFetchOrdersStart),
    call(onFetchOrderStart),
    call(onCreateOrderStart),
    call(onUpdateOrderStart),
    call(onDeleteOrderStart),
  ]);
}

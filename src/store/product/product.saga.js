import { takeLatest, put, all, call, select } from "redux-saga/effects";

import PRODUCT_ACTION_TYPES from "./product.type";

import {
  appendProducts,
  setCreateProductFailed,
  setCreateProductLoading,
  setCreateProductSuccess,
  setDeleteProductFailed,
  setDeleteProductLoading,
  setDeleteProductSuccess,
  setFetchProductFailed,
  setFetchProductLoading,
  setFetchProductsFailed,
  setFetchProductsLoading,
  setFetchProductsPage,
  setFetchProductsSuccess,
  setFetchProductSuccess,
  setIsProductsHasMore,
  setProduct,
  setProducts,
  setUpdateProductFailed,
  setUpdateProductLoading,
  setUpdateProductSuccess,
} from "./product.action";
import { getFetchProductsPage, getFetchProductsPerPage, getFetchProductsSearch } from "./product.selector";

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../../api/product.api";

export function* _getProducts() {
  try {
    yield put(setFetchProductsLoading(true));

    const search = yield select(getFetchProductsSearch);
    const page = yield select(getFetchProductsPage);
    const per_page = yield select(getFetchProductsPerPage);

    const parameters = { search, page, per_page };

    const {
      meta: { message },
      data: products,
    } = yield call(getProducts, parameters);

    yield put(setIsProductsHasMore(products.length > 0));

    if (page > 1) {
      yield put(appendProducts(products));
    } else {
      yield put(setProducts(products));
    }

    yield put(setFetchProductsSuccess(message));
    yield put(setFetchProductsLoading(false));
  } catch (error) {
    yield put(setFetchProductsFailed(error));
    yield put(setFetchProductsLoading(false));
  }
}

export function* _getProduct({ payload: id }) {
  try {
    yield put(setFetchProductLoading(true));

    const {
      meta: { message },
      data: product,
    } = yield call(getProduct, id);

    yield put(setProduct(product));

    yield put(setFetchProductSuccess(message));
    yield put(setFetchProductLoading(false));
  } catch (error) {
    yield put(setFetchProductFailed(error));
    yield put(setFetchProductLoading(false));
  }
}

export function* _createProduct({ payload: request }) {
  try {
    yield put(setCreateProductLoading(true));

    const {
      meta: { message },
    } = yield call(createProduct, request);

    yield put(setCreateProductSuccess(message));
    yield put(setCreateProductLoading(false));

    yield put(setFetchProductsPage(1));
    yield call(_getProducts);
  } catch (error) {
    yield put(setCreateProductFailed(error));
    yield put(setCreateProductLoading(false));
  }
}

export function* _updateProduct({ payload: { id, request } }) {
  try {
    yield put(setUpdateProductLoading(true));

    const {
      meta: { message },
    } = yield call(updateProduct, id, request);

    yield put(setUpdateProductSuccess(message));
    yield put(setUpdateProductLoading(false));

    yield put(setFetchProductsPage(1));
    yield call(_getProducts);
  } catch (error) {
    yield put(setUpdateProductFailed(error));
    yield put(setUpdateProductLoading(false));
  }
}

export function* _deleteProduct({ payload: id }) {
  try {
    yield put(setDeleteProductLoading(true));

    const {
      meta: { message },
    } = yield call(deleteProduct, id);

    yield put(setDeleteProductSuccess(message));
    yield put(setDeleteProductLoading(false));

    yield put(setFetchProductsPage(1));
    yield call(_getProducts);
  } catch (error) {
    yield put(setDeleteProductFailed(error));
    yield put(setDeleteProductLoading(false));
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START, _getProducts);
}

export function* onFetchProductStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START, _getProduct);
}

export function* onCreateProductStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.CREATE_PRODUCT_START, _createProduct);
}

export function* onUpdateProductStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.UPDATE_PRODUCT_START, _updateProduct);
}

export function* onDeleteProductStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.DELETE_PRODUCT_START, _deleteProduct);
}

export function* productSaga() {
  yield all([
    call(onFetchProductsStart),
    call(onFetchProductStart),
    call(onCreateProductStart),
    call(onUpdateProductStart),
    call(onDeleteProductStart),
  ]);
}

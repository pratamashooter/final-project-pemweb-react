import { all, call } from "redux-saga/effects";

import { productSaga } from "./product/product.saga";

export function* rootSaga() {
  yield all([call(productSaga)]);
}

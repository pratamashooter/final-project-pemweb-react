import { all, call } from "redux-saga/effects"

import { productSaga } from "./product/product.saga"
import { orderSaga } from "./order/order.saga"

export function* rootSaga() {
  yield all([call(productSaga), call(orderSaga)])
}

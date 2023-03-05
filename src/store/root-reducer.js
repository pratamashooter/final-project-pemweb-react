import { combineReducers } from "redux";

import { componentReducer } from "./component/component.reducer";
import { productReducer } from "./product/product.reducer";
import { orderReducer } from "./order/order.reducer";

export const rootReducer = combineReducers({
  component: componentReducer,
  product: productReducer,
  order: orderReducer,
});

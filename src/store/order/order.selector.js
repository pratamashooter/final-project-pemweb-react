import { createSelector } from "reselect";

const orderSelector = ({ order }) => order;

export const getOrders = createSelector([orderSelector], ({ orders }) => orders);

export const getIsOrdersHasMore = createSelector([orderSelector], ({ isOrdersHasMore }) => isOrdersHasMore);

export const getFetchOrdersSearch = createSelector(
  [orderSelector],
  ({ fetchOrdersSearch }) => fetchOrdersSearch
);

export const getFetchOrdersPage = createSelector([orderSelector], ({ fetchOrdersPage }) => fetchOrdersPage);

export const getFetchOrdersPerPage = createSelector(
  [orderSelector],
  ({ fetchOrdersPerPage }) => fetchOrdersPerPage
);

export const getFetchOrdersLoading = createSelector(
  [orderSelector],
  ({ fetchOrdersLoading }) => fetchOrdersLoading
);

export const getFetchOrdersSuccess = createSelector(
  [orderSelector],
  ({ fetchOrdersSuccess }) => fetchOrdersSuccess
);

export const getFetchOrdersFailed = createSelector(
  [orderSelector],
  ({ fetchOrdersFailed }) => fetchOrdersFailed
);

export const getOrder = createSelector([orderSelector], ({ order }) => order);

export const getFetchOrderLoading = createSelector(
  [orderSelector],
  ({ fetchOrderLoading }) => fetchOrderLoading
);

export const getFetchOrderSuccess = createSelector(
  [orderSelector],
  ({ fetchOrderSuccess }) => fetchOrderSuccess
);

export const getFetchOrderFailed = createSelector([orderSelector], ({ fetchOrderFailed }) => fetchOrderFailed);

export const getCreateOrderLoading = createSelector(
  [orderSelector],
  ({ createOrderLoading }) => createOrderLoading
);

export const getCreateOrderSuccess = createSelector(
  [orderSelector],
  ({ createOrderSuccess }) => createOrderSuccess
);

export const getCreateOrderFailed = createSelector(
  [orderSelector],
  ({ createOrderFailed }) => createOrderFailed
);

export const getUpdateOrderLoading = createSelector(
  [orderSelector],
  ({ updateOrderLoading }) => updateOrderLoading
);

export const getUpdateOrderSuccess = createSelector(
  [orderSelector],
  ({ updateOrderSuccess }) => updateOrderSuccess
);

export const getUpdateOrderFailed = createSelector(
  [orderSelector],
  ({ updateOrderFailed }) => updateOrderFailed
);

export const getDeleteOrderLoading = createSelector(
  [orderSelector],
  ({ deleteOrderLoading }) => deleteOrderLoading
);

export const getDeleteOrderSuccess = createSelector(
  [orderSelector],
  ({ deleteOrderSuccess }) => deleteOrderSuccess
);

export const getDeleteOrderFailed = createSelector(
  [orderSelector],
  ({ deleteOrderFailed }) => deleteOrderFailed
);

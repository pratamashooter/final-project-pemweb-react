import ORDER_ACTION_TYPES from "./order.type";

export const ORDER_INITIAL_STATE = {
  orders: [],
  isOrdersHasMore: true,
  fetchOrdersSearch: null,
  fetchOrdersPage: 1,
  fetchOrdersPerPage: null,
  fetchOrdersLoading: false,
  fetchOrdersSuccess: null,
  fetchOrdersFailed: null,

  order: null,
  fetchOrderLoading: false,
  fetchOrderSuccess: null,
  fetchOrderFailed: null,

  createOrderLoading: false,
  createOrderSuccess: null,
  createOrderFailed: null,

  updateOrderLoading: false,
  updateOrderSuccess: null,
  updateOrderFailed: null,

  deleteOrderLoading: false,
  deleteOrderSuccess: null,
  deleteOrderFailed: null,
};

export const orderReducer = (state = ORDER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_ACTION_TYPES.SET_ORDERS:
      return { ...state, orders: payload };
    case ORDER_ACTION_TYPES.SET_IS_ORDERS_HAS_MORE:
      return { ...state, isOrdersHasMore: payload };
    case ORDER_ACTION_TYPES.SET_FETCH_ORDERS_SEARCH:
      return { ...state, fetchOrdersSearch: payload };
    case ORDER_ACTION_TYPES.SET_FETCH_ORDERS_PAGE:
      return { ...state, fetchOrdersPage: payload };
    case ORDER_ACTION_TYPES.SET_FETCH_ORDERS_PER_PAGE:
      return { ...state, fetchOrdersPerPage: payload };
    case ORDER_ACTION_TYPES.SET_FETCH_ORDERS_LOADING:
      return { ...state, fetchOrdersLoading: payload };
    case ORDER_ACTION_TYPES.SET_FETCH_ORDERS_SUCCESS:
      return { ...state, fetchOrdersSuccess: payload };
    case ORDER_ACTION_TYPES.SET_FETCH_ORDERS_FAILED:
      return { ...state, fetchOrdersFailed: payload };
    case ORDER_ACTION_TYPES.APPEND_ORDERS:
      return { ...state, orders: [...state.orders, ...payload] };

    case ORDER_ACTION_TYPES.SET_ORDER:
      return { ...state, order: payload };
    case ORDER_ACTION_TYPES.SET_FETCH_ORDER_LOADING:
      return { ...state, fetchOrderLoading: payload };
    case ORDER_ACTION_TYPES.SET_FETCH_ORDER_SUCCESS:
      return { ...state, fetchOrderSuccess: payload };
    case ORDER_ACTION_TYPES.SET_FETCH_ORDER_FAILED:
      return { ...state, fetchOrderFailed: payload };

    case ORDER_ACTION_TYPES.SET_CREATE_ORDER_LOADING:
      return { ...state, createOrderLoading: payload };
    case ORDER_ACTION_TYPES.SET_CREATE_ORDER_SUCCESS:
      return { ...state, createOrderSuccess: payload };
    case ORDER_ACTION_TYPES.SET_CREATE_ORDER_FAILED:
      return { ...state, createOrderFailed: payload };

    case ORDER_ACTION_TYPES.SET_UPDATE_ORDER_LOADING:
      return { ...state, updateOrderLoading: payload };
    case ORDER_ACTION_TYPES.SET_UPDATE_ORDER_SUCCESS:
      return { ...state, updateOrderSuccess: payload };
    case ORDER_ACTION_TYPES.SET_UPDATE_ORDER_FAILED:
      return { ...state, updateOrderFailed: payload };

    case ORDER_ACTION_TYPES.SET_DELETE_ORDER_LOADING:
      return { ...state, deleteOrderLoading: payload };
    case ORDER_ACTION_TYPES.SET_DELETE_ORDER_SUCCESS:
      return { ...state, deleteOrderSuccess: payload };
    case ORDER_ACTION_TYPES.SET_DELETE_ORDER_FAILED:
      return { ...state, deleteOrderFailed: payload };
    default:
      return state;
  }
};

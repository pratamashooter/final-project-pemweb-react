import PRODUCT_ACTION_TYPES from "./product.type";

export const PRODUCT_INITIAL_STATE = {
  products: [],
  isProductsHasMore: true,
  fetchProductsSearch: null,
  fetchProductsPage: 1,
  fetchProductsPerPage: null,
  fetchProductsLoading: false,
  fetchProductsSuccess: null,
  fetchProductsFailed: null,

  product: null,
  fetchProductLoading: false,
  fetchProductSuccess: null,
  fetchProductFailed: null,

  createProductLoading: false,
  createProductSuccess: null,
  createProductFailed: null,

  updateProductLoading: false,
  updateProductSuccess: null,
  updateProductFailed: null,

  deleteProductLoading: false,
  deleteProductSuccess: null,
  deleteProductFailed: null,
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_PRODUCTS:
      return { ...state, products: payload };
    case PRODUCT_ACTION_TYPES.SET_IS_PRODUCTS_HAS_MORE:
      return { ...state, isProductsHasMore: payload };
    case PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_SEARCH:
      return { ...state, fetchProductsSearch: payload };
    case PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_PAGE:
      return { ...state, fetchProductsPage: payload };
    case PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_PER_PAGE:
      return { ...state, fetchProductsPerPage: payload };
    case PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_LOADING:
      return { ...state, fetchProductsLoading: payload };
    case PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_SUCCESS:
      return { ...state, fetchProductsSuccess: payload };
    case PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCTS_FAILED:
      return { ...state, fetchProductsFailed: payload };
    case PRODUCT_ACTION_TYPES.APPEND_PRODUCTS:
      return { ...state, products: [...state.products, ...payload] };

    case PRODUCT_ACTION_TYPES.SET_PRODUCT:
      return { ...state, product: payload };
    case PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCT_LOADING:
      return { ...state, fetchProductLoading: payload };
    case PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCT_SUCCESS:
      return { ...state, fetchProductSuccess: payload };
    case PRODUCT_ACTION_TYPES.SET_FETCH_PRODUCT_FAILED:
      return { ...state, fetchProductFailed: payload };

    case PRODUCT_ACTION_TYPES.SET_CREATE_PRODUCT_LOADING:
      return { ...state, createProductLoading: payload };
    case PRODUCT_ACTION_TYPES.SET_CREATE_PRODUCT_SUCCESS:
      return { ...state, createProductSuccess: payload };
    case PRODUCT_ACTION_TYPES.SET_CREATE_PRODUCT_FAILED:
      return { ...state, createProductFailed: payload };

    case PRODUCT_ACTION_TYPES.SET_UPDATE_PRODUCT_LOADING:
      return { ...state, updateProductLoading: payload };
    case PRODUCT_ACTION_TYPES.SET_UPDATE_PRODUCT_SUCCESS:
      return { ...state, updateProductSuccess: payload };
    case PRODUCT_ACTION_TYPES.SET_UPDATE_PRODUCT_FAILED:
      return { ...state, updateProductFailed: payload };

    case PRODUCT_ACTION_TYPES.SET_DELETE_PRODUCT_LOADING:
      return { ...state, deleteProductLoading: payload };
    case PRODUCT_ACTION_TYPES.SET_DELETE_PRODUCT_SUCCESS:
      return { ...state, deleteProductSuccess: payload };
    case PRODUCT_ACTION_TYPES.SET_DELETE_PRODUCT_FAILED:
      return { ...state, deleteProductFailed: payload };
    default:
      return state;
  }
};

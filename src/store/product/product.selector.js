import { createSelector } from "reselect";

const productSelector = ({ product }) => product;

export const getProducts = createSelector([productSelector], ({ products }) => products);

export const getIsProductsHasMore = createSelector([productSelector], ({ isProductsHasMore }) => isProductsHasMore);

export const getFetchProductsSearch = createSelector(
  [productSelector],
  ({ fetchProductsSearch }) => fetchProductsSearch
);

export const getFetchProductsPage = createSelector([productSelector], ({ fetchProductsPage }) => fetchProductsPage);

export const getFetchProductsPerPage = createSelector(
  [productSelector],
  ({ fetchProductsPerPage }) => fetchProductsPerPage
);

export const getFetchProductsLoading = createSelector(
  [productSelector],
  ({ fetchProductsLoading }) => fetchProductsLoading
);

export const getFetchProductsSuccess = createSelector(
  [productSelector],
  ({ fetchProductsSuccess }) => fetchProductsSuccess
);

export const getFetchProductsFailed = createSelector(
  [productSelector],
  ({ fetchProductsFailed }) => fetchProductsFailed
);

export const getProduct = createSelector([productSelector], ({ product }) => product);

export const getFetchProductLoading = createSelector(
  [productSelector],
  ({ fetchProductLoading }) => fetchProductLoading
);

export const getFetchProductSuccess = createSelector(
  [productSelector],
  ({ fetchProductSuccess }) => fetchProductSuccess
);

export const getFetchProductFailed = createSelector([productSelector], ({ fetchProductFailed }) => fetchProductFailed);

export const getCreateProductLoading = createSelector(
  [productSelector],
  ({ createProductLoading }) => createProductLoading
);

export const getCreateProductSuccess = createSelector(
  [productSelector],
  ({ createProductSuccess }) => createProductSuccess
);

export const getCreateProductFailed = createSelector(
  [productSelector],
  ({ createProductFailed }) => createProductFailed
);

export const getUpdateProductLoading = createSelector(
  [productSelector],
  ({ updateProductLoading }) => updateProductLoading
);

export const getUpdateProductSuccess = createSelector(
  [productSelector],
  ({ updateProductSuccess }) => updateProductSuccess
);

export const getUpdateProductFailed = createSelector(
  [productSelector],
  ({ updateProductFailed }) => updateProductFailed
);

export const getDeleteProductLoading = createSelector(
  [productSelector],
  ({ deleteProductLoading }) => deleteProductLoading
);

export const getDeleteProductSuccess = createSelector(
  [productSelector],
  ({ deleteProductSuccess }) => deleteProductSuccess
);

export const getDeleteProductFailed = createSelector(
  [productSelector],
  ({ deleteProductFailed }) => deleteProductFailed
);

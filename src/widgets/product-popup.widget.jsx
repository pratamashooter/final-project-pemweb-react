import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showErrorMessage, showSuccessMessage } from "../utils/popup.utils";

import { setIsModalOpen } from "../store/component/component.action";
import {
  setCreateProductFailed,
  setCreateProductSuccess,
  setDeleteProductFailed,
  setDeleteProductSuccess,
  setFetchProductFailed,
  setFetchProductsFailed,
  setUpdateProductFailed,
  setUpdateProductSuccess,
} from "../store/product/product.action";
import {
  getCreateProductFailed,
  getCreateProductSuccess,
  getDeleteProductFailed,
  getDeleteProductSuccess,
  getFetchProductFailed,
  getFetchProductsFailed,
  getUpdateProductFailed,
  getUpdateProductSuccess,
} from "../store/product/product.selector";

const ProductPopup = () => {
  const dispatch = useDispatch();

  const createProductSuccess = useSelector(getCreateProductSuccess);
  const updateProductSuccess = useSelector(getUpdateProductSuccess);
  const deleteProductSuccess = useSelector(getDeleteProductSuccess);
  const fetchProductsFailed = useSelector(getFetchProductsFailed);
  const fetchProductFailed = useSelector(getFetchProductFailed);
  const createProductFailed = useSelector(getCreateProductFailed);
  const updateProductFailed = useSelector(getUpdateProductFailed);
  const deleteProductFailed = useSelector(getDeleteProductFailed);

  useEffect(() => {
    if (createProductSuccess !== null || updateProductSuccess !== null || deleteProductSuccess !== null) {
      showSuccessMessage(createProductSuccess ?? updateProductSuccess ?? deleteProductSuccess);
      dispatch(setIsModalOpen(false));

      if (createProductSuccess !== null) dispatch(setCreateProductSuccess(null));
      if (updateProductSuccess !== null) dispatch(setUpdateProductSuccess(null));
      if (deleteProductSuccess !== null) dispatch(setDeleteProductSuccess(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createProductSuccess, updateProductSuccess, deleteProductSuccess]);

  useEffect(() => {
    if (
      fetchProductsFailed !== null ||
      fetchProductFailed !== null ||
      createProductFailed !== null ||
      updateProductFailed !== null ||
      deleteProductFailed !== null
    ) {
      showErrorMessage(
        fetchProductsFailed ?? fetchProductFailed ?? createProductFailed ?? updateProductFailed ?? deleteProductFailed
      );
      dispatch(setIsModalOpen(false));

      if (fetchProductsFailed !== null) dispatch(setFetchProductsFailed(null));
      if (fetchProductFailed !== null) dispatch(setFetchProductFailed(null));
      if (createProductFailed !== null) dispatch(setCreateProductFailed(null));
      if (updateProductFailed !== null) dispatch(setUpdateProductFailed(null));
      if (deleteProductFailed !== null) dispatch(setDeleteProductFailed(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProductsFailed, fetchProductFailed, createProductFailed, updateProductFailed, deleteProductFailed]);

  return <></>;
};

export default ProductPopup;

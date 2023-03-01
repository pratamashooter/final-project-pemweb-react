import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showErrorMessage, showSuccessMessage } from "../../utils/popup.utils";

import {
  setCreateExampleFailed,
  setCreateExampleSuccess,
  setDeleteExampleFailed,
  setDeleteExampleSuccess,
  setFetchExampleFailed,
  setFetchExamplesFailed,
  setUpdateExampleFailed,
  setUpdateExampleSuccess,
} from "../../store/example/example.action";
import {
  getCreateExampleFailed,
  getCreateExampleSuccess,
  getDeleteExampleFailed,
  getDeleteExampleSuccess,
  getFetchExampleFailed,
  getFetchExamplesFailed,
  getUpdateExampleFailed,
  getUpdateExampleSuccess,
} from "../../store/example/example.selector";

const ExamplePopup = () => {
  const dispatch = useDispatch();

  const createExampleSuccess = useSelector(getCreateExampleSuccess);
  const updateExampleSuccess = useSelector(getUpdateExampleSuccess);
  const deleteExampleSuccess = useSelector(getDeleteExampleSuccess);
  const fetchExamplesFailed = useSelector(getFetchExamplesFailed);
  const fetchExampleFailed = useSelector(getFetchExampleFailed);
  const createExampleFailed = useSelector(getCreateExampleFailed);
  const updateExampleFailed = useSelector(getUpdateExampleFailed);
  const deleteExampleFailed = useSelector(getDeleteExampleFailed);

  useEffect(() => {
    if (createExampleSuccess !== null || updateExampleSuccess !== null || deleteExampleSuccess !== null) {
      showSuccessMessage(createExampleSuccess ?? updateExampleSuccess ?? deleteExampleSuccess);

      if (createExampleSuccess !== null) dispatch(setCreateExampleSuccess(null));
      if (updateExampleSuccess !== null) dispatch(setUpdateExampleSuccess(null));
      if (deleteExampleSuccess !== null) dispatch(setDeleteExampleSuccess(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createExampleSuccess, updateExampleSuccess, deleteExampleSuccess]);

  useEffect(() => {
    if (
      fetchExamplesFailed !== null ||
      fetchExampleFailed !== null ||
      createExampleFailed !== null ||
      updateExampleFailed !== null ||
      deleteExampleFailed !== null
    ) {
      showErrorMessage(
        fetchExamplesFailed ?? fetchExampleFailed ?? createExampleFailed ?? updateExampleFailed ?? deleteExampleFailed
      );

      if (fetchExamplesFailed !== null) dispatch(setFetchExamplesFailed(null));
      if (fetchExampleFailed !== null) dispatch(setFetchExampleFailed(null));
      if (createExampleFailed !== null) dispatch(setCreateExampleFailed(null));
      if (updateExampleFailed !== null) dispatch(setUpdateExampleFailed(null));
      if (deleteExampleFailed !== null) dispatch(setDeleteExampleFailed(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchExamplesFailed, fetchExampleFailed, createExampleFailed, updateExampleFailed, deleteExampleFailed]);

  return <></>;
};

export default ExamplePopup;

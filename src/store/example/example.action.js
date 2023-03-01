import EXAMPLE_ACTION_TYPES from "./example.type";

import { createAction } from "../../utils/reducer.utils";

export const setExamples = (examples) => createAction(EXAMPLE_ACTION_TYPES.SET_EXAMPLES, examples);

export const setIsExamplesHasMore = (isExamplesHasMore) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_IS_EXAMPLES_HAS_MORE, isExamplesHasMore);

export const setFetchExamplesSearch = (fetchExamplesSearch) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_SEARCH, fetchExamplesSearch);

export const setFetchExamplesPage = (fetchExamplesPage) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_PAGE, fetchExamplesPage);

export const setFetchExamplesPerPage = (fetchExamplesPerPage) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_PER_PAGE, fetchExamplesPerPage);

export const setFetchExamplesIncludes = (fetchExamplesIncludes) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_INCLUDES, fetchExamplesIncludes);

export const setFetchExamplesFilterColumnA = (fetchExamplesFilterColumnA) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_FILTER_COLUMN_A, fetchExamplesFilterColumnA);

export const setFetchExamplesFilterColumnB = (fetchExamplesFilterColumnB) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_FILTER_COLUMN_B, fetchExamplesFilterColumnB);

export const setFetchExamplesLoading = (fetchExamplesLoading) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_LOADING, fetchExamplesLoading);

export const setFetchExamplesSuccess = (fetchExamplesSuccess) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_SUCCESS, fetchExamplesSuccess);

export const setFetchExamplesFailed = (fetchExamplesFailed) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_FAILED, fetchExamplesFailed);

export const appendExamples = (examples) => createAction(EXAMPLE_ACTION_TYPES.APPEND_EXAMPLES, examples);

export const fetchExamplesStart = () => createAction(EXAMPLE_ACTION_TYPES.FETCH_EXAMPLES_START);

export const setExample = (example) => createAction(EXAMPLE_ACTION_TYPES.SET_EXAMPLE, example);

export const setFetchExampleLoading = (fetchExampleLoading) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLE_LOADING, fetchExampleLoading);

export const setFetchExampleSuccess = (fetchExampleSuccess) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLE_SUCCESS, fetchExampleSuccess);

export const setFetchExampleFailed = (fetchExampleFailed) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLE_FAILED, fetchExampleFailed);

export const fetchExampleStart = (id) => createAction(EXAMPLE_ACTION_TYPES.FETCH_EXAMPLE_START, id);

export const setCreateExampleLoading = (createExampleLoading) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_CREATE_EXAMPLE_LOADING, createExampleLoading);

export const setCreateExampleSuccess = (createExampleSuccess) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_CREATE_EXAMPLE_SUCCESS, createExampleSuccess);

export const setCreateExampleFailed = (createExampleFailed) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_CREATE_EXAMPLE_FAILED, createExampleFailed);

export const createExampleStart = (request) => createAction(EXAMPLE_ACTION_TYPES.CREATE_EXAMPLE_START, request);

export const setUpdateExampleLoading = (updateExampleLoading) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_UPDATE_EXAMPLE_LOADING, updateExampleLoading);

export const setUpdateExampleSuccess = (updateExampleSuccess) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_UPDATE_EXAMPLE_SUCCESS, updateExampleSuccess);

export const setUpdateExampleFailed = (updateExampleFailed) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_UPDATE_EXAMPLE_FAILED, updateExampleFailed);

export const updateExampleStart = (id, request) =>
  createAction(EXAMPLE_ACTION_TYPES.UPDATE_EXAMPLE_START, { id, request });

export const setDeleteExampleLoading = (deleteExampleLoading) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_DELETE_EXAMPLE_LOADING, deleteExampleLoading);

export const setDeleteExampleSuccess = (deleteExampleSuccess) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_DELETE_EXAMPLE_SUCCESS, deleteExampleSuccess);

export const setDeleteExampleFailed = (deleteExampleFailed) =>
  createAction(EXAMPLE_ACTION_TYPES.SET_DELETE_EXAMPLE_FAILED, deleteExampleFailed);

export const deleteExampleStart = (id) => createAction(EXAMPLE_ACTION_TYPES.DELETE_EXAMPLE_START, id);

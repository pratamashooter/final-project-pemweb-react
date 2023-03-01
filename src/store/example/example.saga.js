import { takeLatest, put, all, call, select } from "redux-saga/effects";

import EXAMPLE_ACTION_TYPES from "./example.type";

import {
  appendExamples,
  setCreateExampleFailed,
  setCreateExampleLoading,
  setCreateExampleSuccess,
  setDeleteExampleFailed,
  setDeleteExampleLoading,
  setDeleteExampleSuccess,
  setFetchExampleFailed,
  setFetchExampleLoading,
  setFetchExamplesFailed,
  setFetchExamplesLoading,
  setFetchExamplesPage,
  setFetchExamplesSuccess,
  setFetchExampleSuccess,
  setIsExamplesHasMore,
  setExample,
  setExamples,
  setUpdateExampleFailed,
  setUpdateExampleLoading,
  setUpdateExampleSuccess,
} from "./example.action";
import {
  getFetchExamplesFilterColumnA,
  getFetchExamplesFilterColumnB,
  getFetchExamplesIncludes,
  getFetchExamplesPage,
  getFetchExamplesPerPage,
  getFetchExamplesSearch,
} from "./example.selector";

import { getExamples, getExample, createExample, updateExample, deleteExample } from "../../api/example.api";

export function* _getExamples() {
  try {
    yield put(setFetchExamplesLoading(true));

    const search = yield select(getFetchExamplesSearch);
    const page = yield select(getFetchExamplesPage);
    const per_page = yield select(getFetchExamplesPerPage);
    const includes = yield select(getFetchExamplesIncludes);
    const column_a = yield select(getFetchExamplesFilterColumnA);
    const column_b = yield select(getFetchExamplesFilterColumnB);

    const parameters = {
      search,
      page,
      per_page,
      includes,
      filter: { column_a, column_b },
    };

    const {
      meta: { message },
      data: { data: examples },
    } = yield call(getExamples, parameters);

    yield put(setIsExamplesHasMore(examples.length > 0));

    if (page > 1) {
      yield put(appendExamples(examples));
    } else {
      yield put(setExamples(examples));
    }

    yield put(setFetchExamplesSuccess(message));
    yield put(setFetchExamplesLoading(false));
  } catch (error) {
    yield put(setFetchExamplesFailed(error));
    yield put(setFetchExamplesLoading(false));
  }
}

export function* _getExample({ payload: id }) {
  try {
    yield put(setFetchExampleLoading(true));

    const {
      meta: { message },
      data: example,
    } = yield call(getExample, id);

    yield put(setExample(example));

    yield put(setFetchExampleSuccess(message));
    yield put(setFetchExampleLoading(false));
  } catch (error) {
    yield put(setFetchExampleFailed(error));
    yield put(setFetchExampleLoading(false));
  }
}

export function* _createExample({ payload: request }) {
  try {
    yield put(setCreateExampleLoading(true));

    const {
      meta: { message },
    } = yield call(createExample, request);

    yield put(setCreateExampleSuccess(message));
    yield put(setCreateExampleLoading(false));

    yield put(setFetchExamplesPage(1));
    yield call(_getExamples);
  } catch (error) {
    yield put(setCreateExampleFailed(error));
    yield put(setCreateExampleLoading(false));
  }
}

export function* _updateExample({ payload: { id, request } }) {
  try {
    yield put(setUpdateExampleLoading(true));

    const {
      meta: { message },
    } = yield call(updateExample, id, request);

    yield put(setUpdateExampleSuccess(message));
    yield put(setUpdateExampleLoading(false));

    yield put(setFetchExamplesPage(1));
    yield call(_getExamples);
  } catch (error) {
    yield put(setUpdateExampleFailed(error));
    yield put(setUpdateExampleLoading(false));
  }
}

export function* _deleteExample({ payload: id }) {
  try {
    yield put(setDeleteExampleLoading(true));

    const {
      meta: { message },
    } = yield call(deleteExample, id);

    yield put(setDeleteExampleSuccess(message));
    yield put(setDeleteExampleLoading(false));

    yield put(setFetchExamplesPage(1));
    yield call(_getExamples);
  } catch (error) {
    yield put(setDeleteExampleFailed(error));
    yield put(setDeleteExampleLoading(false));
  }
}

export function* onFetchExamplesStart() {
  yield takeLatest(EXAMPLE_ACTION_TYPES.FETCH_EXAMPLES_START, _getExamples);
}

export function* onFetchExampleStart() {
  yield takeLatest(EXAMPLE_ACTION_TYPES.FETCH_EXAMPLE_START, _getExample);
}

export function* onCreateExampleStart() {
  yield takeLatest(EXAMPLE_ACTION_TYPES.CREATE_EXAMPLE_START, _createExample);
}

export function* onUpdateExampleStart() {
  yield takeLatest(EXAMPLE_ACTION_TYPES.UPDATE_EXAMPLE_START, _updateExample);
}

export function* onDeleteExampleStart() {
  yield takeLatest(EXAMPLE_ACTION_TYPES.DELETE_EXAMPLE_START, _deleteExample);
}

export function* exampleSaga() {
  yield all([
    call(onFetchExamplesStart),
    call(onFetchExampleStart),
    call(onCreateExampleStart),
    call(onUpdateExampleStart),
    call(onDeleteExampleStart),
  ]);
}

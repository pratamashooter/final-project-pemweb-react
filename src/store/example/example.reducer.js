import EXAMPLE_ACTION_TYPES from "./example.type";

export const EXAMPLE_INITIAL_STATE = {
  examples: [],
  isExamplesHasMore: true,
  fetchExamplesSearch: null,
  fetchExamplesPage: 1,
  fetchExamplesPerPage: null,
  fetchExamplesIncludes: null,
  fetchExamplesFilterColumnA: null,
  fetchExamplesFilterColumnB: null,
  fetchExamplesLoading: false,
  fetchExamplesSuccess: null,
  fetchExamplesFailed: null,

  example: null,
  fetchExampleLoading: false,
  fetchExampleSuccess: null,
  fetchExampleFailed: null,

  createExampleLoading: false,
  createExampleSuccess: null,
  createExampleFailed: null,

  updateExampleLoading: false,
  updateExampleSuccess: null,
  updateExampleFailed: null,

  deleteExampleLoading: false,
  deleteExampleSuccess: null,
  deleteExampleFailed: null,
};

export const exampleReducer = (state = EXAMPLE_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case EXAMPLE_ACTION_TYPES.SET_EXAMPLES:
      return { ...state, examples: payload };
    case EXAMPLE_ACTION_TYPES.SET_IS_EXAMPLES_HAS_MORE:
      return { ...state, isExamplesHasMore: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_SEARCH:
      return { ...state, fetchExamplesSearch: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_PAGE:
      return { ...state, fetchExamplesPage: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_PER_PAGE:
      return { ...state, fetchExamplesPerPage: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_INCLUDES:
      return { ...state, fetchExamplesIncludes: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_FILTER_COLUMN_A:
      return { ...state, fetchExamplesFilterColumnA: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_FILTER_COLUMN_B:
      return { ...state, fetchExamplesFilterColumnB: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_LOADING:
      return { ...state, fetchExamplesLoading: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_SUCCESS:
      return { ...state, fetchExamplesSuccess: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLES_FAILED:
      return { ...state, fetchExamplesFailed: payload };
    case EXAMPLE_ACTION_TYPES.APPEND_EXAMPLES:
      return { ...state, examples: [...state.examples, ...payload] };

    case EXAMPLE_ACTION_TYPES.SET_EXAMPLE:
      return { ...state, example: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLE_LOADING:
      return { ...state, fetchExampleLoading: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLE_SUCCESS:
      return { ...state, fetchExampleSuccess: payload };
    case EXAMPLE_ACTION_TYPES.SET_FETCH_EXAMPLE_FAILED:
      return { ...state, fetchExampleFailed: payload };

    case EXAMPLE_ACTION_TYPES.SET_CREATE_EXAMPLE_LOADING:
      return { ...state, createExampleLoading: payload };
    case EXAMPLE_ACTION_TYPES.SET_CREATE_EXAMPLE_SUCCESS:
      return { ...state, createExampleSuccess: payload };
    case EXAMPLE_ACTION_TYPES.SET_CREATE_EXAMPLE_FAILED:
      return { ...state, createExampleFailed: payload };

    case EXAMPLE_ACTION_TYPES.SET_UPDATE_EXAMPLE_LOADING:
      return { ...state, updateExampleLoading: payload };
    case EXAMPLE_ACTION_TYPES.SET_UPDATE_EXAMPLE_SUCCESS:
      return { ...state, updateExampleSuccess: payload };
    case EXAMPLE_ACTION_TYPES.SET_UPDATE_EXAMPLE_FAILED:
      return { ...state, updateExampleFailed: payload };

    case EXAMPLE_ACTION_TYPES.SET_DELETE_EXAMPLE_LOADING:
      return { ...state, deleteExampleLoading: payload };
    case EXAMPLE_ACTION_TYPES.SET_DELETE_EXAMPLE_SUCCESS:
      return { ...state, deleteExampleSuccess: payload };
    case EXAMPLE_ACTION_TYPES.SET_DELETE_EXAMPLE_FAILED:
      return { ...state, deleteExampleFailed: payload };
    default:
      return state;
  }
};

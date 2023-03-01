import { createSelector } from "reselect";

const exampleSelector = ({ example }) => example;

export const getExamples = createSelector([exampleSelector], ({ examples }) => examples);

export const getIsExamplesHasMore = createSelector([exampleSelector], ({ isExamplesHasMore }) => isExamplesHasMore);

export const getFetchExamplesSearch = createSelector(
  [exampleSelector],
  ({ fetchExamplesSearch }) => fetchExamplesSearch
);

export const getFetchExamplesPage = createSelector([exampleSelector], ({ fetchExamplesPage }) => fetchExamplesPage);

export const getFetchExamplesPerPage = createSelector(
  [exampleSelector],
  ({ fetchExamplesPerPage }) => fetchExamplesPerPage
);

export const getFetchExamplesIncludes = createSelector(
  [exampleSelector],
  ({ fetchExamplesIncludes }) => fetchExamplesIncludes
);

export const getFetchExamplesFilterColumnA = createSelector(
  [exampleSelector],
  ({ fetchExamplesFilterColumnA }) => fetchExamplesFilterColumnA
);

export const getFetchExamplesFilterColumnB = createSelector(
  [exampleSelector],
  ({ fetchExamplesFilterColumnB }) => fetchExamplesFilterColumnB
);

export const getFetchExamplesLoading = createSelector(
  [exampleSelector],
  ({ fetchExamplesLoading }) => fetchExamplesLoading
);

export const getFetchExamplesSuccess = createSelector(
  [exampleSelector],
  ({ fetchExamplesSuccess }) => fetchExamplesSuccess
);

export const getFetchExamplesFailed = createSelector(
  [exampleSelector],
  ({ fetchExamplesFailed }) => fetchExamplesFailed
);

export const getExample = createSelector([exampleSelector], ({ example }) => example);

export const getFetchExampleLoading = createSelector(
  [exampleSelector],
  ({ fetchExampleLoading }) => fetchExampleLoading
);

export const getFetchExampleSuccess = createSelector(
  [exampleSelector],
  ({ fetchExampleSuccess }) => fetchExampleSuccess
);

export const getFetchExampleFailed = createSelector([exampleSelector], ({ fetchExampleFailed }) => fetchExampleFailed);

export const getCreateExampleLoading = createSelector(
  [exampleSelector],
  ({ createExampleLoading }) => createExampleLoading
);

export const getCreateExampleSuccess = createSelector(
  [exampleSelector],
  ({ createExampleSuccess }) => createExampleSuccess
);

export const getCreateExampleFailed = createSelector(
  [exampleSelector],
  ({ createExampleFailed }) => createExampleFailed
);

export const getUpdateExampleLoading = createSelector(
  [exampleSelector],
  ({ updateExampleLoading }) => updateExampleLoading
);

export const getUpdateExampleSuccess = createSelector(
  [exampleSelector],
  ({ updateExampleSuccess }) => updateExampleSuccess
);

export const getUpdateExampleFailed = createSelector(
  [exampleSelector],
  ({ updateExampleFailed }) => updateExampleFailed
);

export const getDeleteExampleLoading = createSelector(
  [exampleSelector],
  ({ deleteExampleLoading }) => deleteExampleLoading
);

export const getDeleteExampleSuccess = createSelector(
  [exampleSelector],
  ({ deleteExampleSuccess }) => deleteExampleSuccess
);

export const getDeleteExampleFailed = createSelector(
  [exampleSelector],
  ({ deleteExampleFailed }) => deleteExampleFailed
);

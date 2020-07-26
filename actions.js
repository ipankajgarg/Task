import * as types from "./types";

// INITIALIZES CLOCK ON SERVER
const actionCreator = type => payload => ({ type, payload });

export const getSearchDataLoading = actionCreator(types.searchDataLoading);
export const getSearchDataSuccess = actionCreator(types.searchDataSuccess);

export const getSearchDataFailure = actionCreator(types.searchDataFailure);

export const getSearchPaginationDataLoading = actionCreator(
  types.searchPaginationDataLoading
);
export const getSearchPaginationDataSuccess = actionCreator(
  types.searchPaginationDataSuccess
);

export const getSearchPaginationDataFailure = actionCreator(
  types.searchPaginationDataFailure
);

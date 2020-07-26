import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import * as types from "./types";

const fetchDataReducer = (
  state = { isLoading: false, error: "", isPaginationLoading: false },
  { type, payload }
) => {
  switch (type) {
    case types.searchDataLoading:
      return { ...state, isLoading: true };
    case types.searchDataSuccess:
      return { ...state, data: payload, isLoading: false, error: "" };
    case types.searchDataFailure:
      return { ...state, isLoading: false, error: payload };

    case types.searchPaginationDataLoading:
      return { ...state, isPaginationLoading: true };
    case types.searchPaginationDataSuccess:
      state.data.results = [...state.data.results, ...payload.results];
      state.data.page = payload.page;
      return {
        ...state,
        isPaginationLoading: false,
        error: ""
      };
    case types.searchDataSuccess:
      return { ...state, isPaginationLoading: false, error: payload };
    default:
      return state;
  }
};

const reducers = {
  searchResult: fetchDataReducer
};

const rootReducer = combineReducers(reducers);

export function initializeStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

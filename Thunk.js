import axios from "axios";
import * as actions from "./actions";

export const BASE_URL = "http://api.jikan.moe/v3/search/anime?limit=16";

export const getSearchDataThunk = (value, page = 1) => dispatch => {
  dispatch(actions.getSearchDataLoading());

  return axios.get(`${BASE_URL}?q=${value}&page=${page}`).then(res => {
    console.log(res);
    dispatch(actions.getSearchDataSuccess({ ...res.data, page }));
  });
};

export const getSearchPaginationDataThunk = (value, page = 2) => dispatch => {
  console.log("1");
  dispatch(actions.getSearchPaginationDataLoading());
  console.log("2");
  return axios.get(`${BASE_URL}?q=${value}&page=${page}`).then(res => {
    console.log(res);
    dispatch(actions.getSearchPaginationDataSuccess({ ...res.data, page }));
  });
};

import * as types from "./actionTypes";

export function authorFilterChangedSuccess(filterStr) {
  return { type: types.FILTER_AUTHOR_NAME_CHANGED, filterStr };
}

export function authorFilterChanged(filterStr) {
  return function (dispatch) {
    return dispatch(authorFilterChangedSuccess(filterStr));
  };
}

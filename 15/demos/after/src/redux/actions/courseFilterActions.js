import * as types from "./actionTypes";

export function courseFilterChangedSuccess(filterStr) {
  return { type: types.FILTER_CHANGED, filterStr };
}

export function courseFilterChanged(filterStr) {
  return function (dispatch) {
    return dispatch(courseFilterChangedSuccess(filterStr));
  };
}

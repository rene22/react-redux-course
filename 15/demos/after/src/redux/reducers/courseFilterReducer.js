import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseFilterReducer(
  state = initialState.filterMap,
  action
) {
  if (action.type == types.FILTER_TITLE_CHANGED) {
    let newState = { ...state };
    newState.filterTitleStr = action.filterTitleStr;
    return newState;
  } else if (action.type == types.FILTER_AUTHOR_CHANGED) {
    let newState = { ...state };
    newState.filterAuthorStr = action.filterAuthorStr;
    return newState;
  } else if (action.type == types.FILTER_CATEGORY_CHANGED) {
    let newState = { ...state };
    newState.filterCategoryStr = action.filterCategoryStr;
    return newState;
  }

  return state;
}

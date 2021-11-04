import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseFilterReducer(
  state = initialState.filterMap,
  action
) {
  debugger;
  if (action.type == types.FILTER_TITLE_CHANGED) {
    return state.map((object1) => (object1.filterTitleStr = action.filterStr));
  } else if (action.type == types.FILTER_AUTHOR_CHANGED) {
    return state.map((object1) => (object1.filterAuthorStr = action.filterStr));
  } else if (action.type == types.FILTER_CATEGORY_CHANGED) {
    return state.map(
      (object1) => (object1.filterCategoryStr = action.filterStr)
    );
  }

  debugger;
  return state;
}

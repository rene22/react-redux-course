import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseFilterReducer(
  state = initialState.filterMap,
  action
) {
  debugger;
  if (action.type == types.FILTER_TITLE_CHANGED) {
    return state.map((object1) =>
      object1.get("filterTitle") === action.filterStr
        ? action.filterStr
        : object1
    );
  } else if (action.type == types.FILTER_AUTHOR_CHANGED) {
    return state.map((object1) =>
      object1.get("filterAuthor") === action.filterStr
        ? action.filterStr
        : object1
    );
  } else if (action.type == types.FILTER_CATEGORY_CHANGED) {
    return state.map((object1) =>
      object1.get("filterCategory") === action.filterStr
        ? object1.get("filterCategory")
        : object1
    );
  }

  debugger;
  return state;
}

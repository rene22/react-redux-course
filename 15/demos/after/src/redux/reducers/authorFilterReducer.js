import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorFilterReducer(
  state = initialState.filterStr,
  action
) {
  if (action.type == types.FILTER_AUTHOR_NAME_CHANGED) {
    return action.filterStr;
  }

  return state;
}

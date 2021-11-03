import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseFilterReducer(
  state = initialState.filterStr,
  action
) {
  if (action.type == types.FILTER_CHANGED) {
    return action.filterStr;
  }

  return state;
}

import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";
import filterStr from "./courseFilterReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
  filterStr,
});

export default rootReducer;

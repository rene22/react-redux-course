import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";
import filterMap from "./courseFilterReducer";
import filterStr from "./authorFilterReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
  filterMap,
  filterStr,
});

export default rootReducer;

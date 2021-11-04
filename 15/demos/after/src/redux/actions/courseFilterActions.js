import * as types from "./actionTypes";

export function courseFilterTitleChangedSuccess(filterTitleStr) {
  return { type: types.FILTER_TITLE_CHANGED, filterTitleStr };
}

export function courseFilterAuthorChangedSuccess(filterAuthorStr) {
  return { type: types.FILTER_AUTHOR_CHANGED, filterAuthorStr };
}

export function courseFilterCategoryChangedSuccess(filterCategoryStr) {
  return { type: types.FILTER_CATEGORY_CHANGED, filterCategoryStr };
}

export function courseFilterChanged(filterType, filterStr) {
  return function (dispatch) {
    switch (filterType) {
      case "filterTitle":
        return dispatch(courseFilterTitleChangedSuccess(filterStr));
      case "filterAuthor":
        return dispatch(courseFilterAuthorChangedSuccess(filterStr));
      case "filterCategory":
        return dispatch(courseFilterCategoryChangedSuccess(filterStr));
    }
  };
}

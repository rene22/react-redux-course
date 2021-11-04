import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import { Link } from "react-router-dom";

function doFilter(course, filterMap) {
  let filterDecision = doFilterTitle(course, filterMap);

  if (filterDecision && !doFilterAuthor(course, filterMap)) {
    filterDecision = false;
  }

  if (filterDecision && !doFilterCategory(course, filterMap)) {
    filterDecision = false;
  }

  return filterDecision;
}

function doFilterTitle(course, filterMap) {
  const filterTitle = filterMap.filterTitleStr;

  if (filterTitle === "") {
    return true;
  } else {
    if (course.title.startsWith(filterTitle)) {
      return true;
    }
  }
  return false;
}

function doFilterAuthor(course, filterMap) {
  const filterAuthor = filterMap.filterAuthorStr;

  if (filterAuthor === "") {
    return true;
  } else {
    if (course.title.startsWith(filterAuthor)) {
      return true;
    }
  }
  return false;
}

function doFilterCategory(course, filterMap) {
  const filterCategory = filterMap.filterCategoryStr;

  if (filterCategory === "") {
    return true;
  } else {
    if (course.title.startsWith(filterCategory)) {
      return true;
    }
  }
  return false;
}

const CourseList = ({ courses, onDeleteClick, filterMap, filterChanged }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>
            Title
            <TextInput
              name="filterTitle"
              label=""
              value={filterMap.filterTitleStr}
              onChange={(e) => filterChanged("filterTitle", e.target.value)}
            />
          </th>
          <th>
            Author{" "}
            <TextInput
              name="filterAuthor"
              label=""
              value={filterMap.filterAuthorStr}
              onChange={(e) => filterChanged("filterAuthor", e.target.value)}
            />
          </th>
          <th>
            Category{" "}
            <TextInput
              name="filterCategory"
              label=""
              value={filterMap.filterCategoryStr}
              onChange={(e) => filterChanged("filterCategory", e.target.value)}
            />
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {courses
          .filter((course) => doFilter(course, filterMap))
          .map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  <a
                    className="btn btn-light"
                    href={"http://pluralsight.com/courses/" + course.slug}
                  >
                    Watch
                  </a>
                </td>
                <td>
                  <Link to={"/course/" + course.slug}>{course.title}</Link>
                </td>
                <td>{course.authorName}</td>
                <td>{course.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDeleteClick(course)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  </>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  filterMap: PropTypes.object.isRequired,
  filterChanged: PropTypes.func.isRequired,
};

export default CourseList;

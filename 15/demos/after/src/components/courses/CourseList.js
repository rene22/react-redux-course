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
  const filterTitleStr = filterMap.get("filterTitleStr");

  if (filterTitleStr === "") {
    return true;
  } else {
    if (course.title.startsWith(filterTitleStr)) {
      return true;
    }
  }
  return false;
}

function doFilterAuthor(course, filterMap) {
  const filterAuthorStr = filterMap.get("filterAuthorStr");

  if (filterAuthorStr === "") {
    return true;
  } else {
    if (course.title.startsWith(filterAuthorStr)) {
      return true;
    }
  }
  return false;
}

function doFilterCategory(course, filterMap) {
  const filterCategoryStr = filterMap.get("filterCategoryStr");

  if (filterCategoryStr === "") {
    return true;
  } else {
    if (course.title.startsWith(filterCategoryStr)) {
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
              value={Object.entries(filterMap).key === "filterTitleStr"}
              onChange={(e) => filterChanged("filterTitle", e.target.value)}
            />
          </th>
          <th>
            Author{" "}
            <TextInput
              name="filterAuthor"
              label=""
              value={Object.entries(filterMap).key === "filterAuthorStr"}
              onChange={(e) => filterChanged("filterAuthor", e.target.value)}
            />
          </th>
          <th>
            Category{" "}
            <TextInput
              name="filterCategory"
              label=""
              value={Object.entries(filterMap).key === "filterCategoryStr"}
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
  filterMap: PropTypes.array.isRequired,
  filterChanged: PropTypes.func.isRequired,
};

export default CourseList;

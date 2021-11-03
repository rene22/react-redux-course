import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import { Link } from "react-router-dom";

const CourseList = ({ courses, onDeleteClick, filterStr, filterChanged }) => (
  <>
    <TextInput
      name="filter"
      label="Filter"
      value={filterStr}
      onChange={(e) => filterChanged(e.target.value)}
    />
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {courses
          .filter(
            (course) => filterStr === "" || course.title.startsWith(filterStr)
          )
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
  filterStr: PropTypes.string.isRequired,
  filterChanged: PropTypes.func.isRequired,
};

export default CourseList;

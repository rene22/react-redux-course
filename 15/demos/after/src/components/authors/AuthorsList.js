import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import { Link } from "react-router-dom";

const AuthorsList = ({ authors, onDeleteClick, filterStr, filterChanged }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Author Id</th>
        <th>
          Author name
          <TextInput
            name="filterName"
            label=""
            value={filterStr}
            onChange={(e) => filterChanged(e.target.value)}
          />
        </th>
        <th />
      </tr>
    </thead>
    <tbody>
      {authors
        .filter(
          (author) => filterStr === "" || author.name.startsWith(filterStr)
        )
        .map((author) => {
          return (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>
                <Link to={"/author/" + author.name}>{author.name}</Link>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteClick(author)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
    </tbody>
  </table>
);

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  filterStr: PropTypes.string.isRequired,
  filterChanged: PropTypes.func.isRequired,
};

export default AuthorsList;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthorsList = ({ authors, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Author Id</th>
        <th>Author name</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => {
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
};

export default AuthorsList;

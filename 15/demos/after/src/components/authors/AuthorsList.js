import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthorsList = ({ authors }) => (
  <table className="table">
    <thead>
      <tr>
        <th>AuthorId</th>
        <th>Author name</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => {
        return (
          <tr key={author.id}>
            <td>{author.id}</td>
            <td>{author.name}</td>
            <td>Delete</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired,
};

export default AuthorsList;

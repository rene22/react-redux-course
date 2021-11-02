import React from "react";
import { connect } from "react-redux";
import * as authorActions from "../../redux/actions/authorActions";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import AuthorsList from "./AuthorsList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { render } from "enzyme";
//import { courses } from "../../../tools/mockData";

function canDoDelete(courses, author) {
  if (courses.length > 0) {
    if (courses.find((a) => a.authorId === author.id)) {
      return false;
    }
  }
  return true;
}
class AuthorsPage extends React.Component {
  state = {
    redirectToAddAuthorPage: false,
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed. " + error);
      });
    }

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }

  handleDeleteAuthor = async (author) => {
    const { courses } = this.props;
    if (canDoDelete(courses, author)) {
      toast.success("Author deleted");
      try {
        await this.props.actions.deleteAuthor(author);
      } catch (error) {
        toast.error("Delete failed. " + error.message, { autoClose: false });
      }
    } else {
      toast.error(
        "Author can't be deleted because course with author exists, delete courses first."
      );
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddAuthorPage && <Redirect to="/author" />}
        <h2>Authors</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-author"
              onClick={() => this.setState({ redirectToAddAuthorPage: true })}
            >
              Add Author
            </button>

            <AuthorsList
              onDeleteClick={this.handleDeleteAuthor}
              authors={this.props.authors}
            />
          </>
        )}
      </>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses: state.courses,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      deleteAuthor: bindActionCreators(authorActions.deleteAuthor, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);

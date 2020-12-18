import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Validate from "../../components/form/Validate";
import { connect } from "react-redux";
import CommentForm from "../../components/posts/comment/CommentForm";
import { createComment } from "../../actions/commentActions";
import { getPostByID } from "../../actions/postActions";

const CreateCommentPage = ({ post, errors, createComment, loading, history, getPostByID,
  match, }) => {
  const [comment, setComment] = useState({
    body: "",
    errors: {}
  });

  useEffect(() => {
    setComment(comment => {
      return { ...comment, errors };
    });
  }, [errors]);

  useEffect(() => {
    getPostByID(match.params.id);
  }, [match, getPostByID]);

  const handleChange = e => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    const error = { ...comment.errors, ...Validate(name, value).errors };
    setComment({ ...comment, errors: { ...error } });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { body } = comment;
    createComment(comment, history, post._id);

  };

  return (
      <CommentForm
          loading={loading}
          comment={comment}
          postId={post._id}
          onChange={handleChange}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
      />
  );
};

const mapStateToProps = state => ({
  loading: state.post.postLoading,
  errors: state.errors,
  post: state.post.post
});


CreateCommentPage.propTypes = {
  createComment: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getPostByID: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    { getPostByID, createComment }
)(CreateCommentPage);

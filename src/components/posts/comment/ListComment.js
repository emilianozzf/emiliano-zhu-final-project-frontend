import React from "react";
import { Link } from "react-router-dom";
// import Post from "./Post";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
// import "./post.scss";
import Comment from "./Comment";

const ListComment = ({ auth, comments, onDelete, onEdit }) => {
  return (
      <div className="grid-container mx-3">
        {comments.map(comment => (
              <Comment auth={auth}
                       comment={comment}
                       onDelete={onDelete}
                       onEdit={onEdit} />

        ))}
      </div>
  );
};

ListComment.propTypes = {
  comments: PropTypes.array.isRequired
};

export default ListComment;

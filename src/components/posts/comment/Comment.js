import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../../utils/getFormattedDate";
import Card from "react-bootstrap/Card";
import {Button, Col, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const Comment = ({ auth, comment, onDelete, onEdit}) => {
  const postDate = getFormattedDate(comment.date);
  var user = (auth.isAuthenticated) ? JSON.stringify(auth.user.user_name).slice(1,-1):""
  return (

      <div className="row">
        <div className="col-md-12">
          {/*<hr/>*/}
          <div className="d-flex justify-content-between">
            <strong>{comment.author.user_name}</strong>
            <span className="text-muted">{postDate}</span>
          </div>

          <p>
            {/*{comment.text}*/}
            {comment.body}
          </p>
          {(auth.isAuthenticated && user === comment.author) ? (
                  <Row className="mt-4">
                    <Col className="text-right">
                      <Button
                          className="mr-2"
                          variant="info"
                          onClick={onEdit}
                      >
                        Edit
                      </Button>
                      <Button className="mr-2" variant="danger"  onClick={onDelete}>
                        Delete
                      </Button>
                      {/*TODO: onclick = onComment*/}
                      </Col>
                  </Row>
              ):
              ""
          }
          <hr/>
      </div>
</div>

  );
};

// Post.propTypes = {
//   post: PropTypes.object.isRequired
// };

export default Comment;
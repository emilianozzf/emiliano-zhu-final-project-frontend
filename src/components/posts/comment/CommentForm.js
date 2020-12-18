import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Col } from "react-bootstrap";
import Textarea from "../../form/Textarea";
import {Link} from "react-router-dom";


const CommentForm = ({ comment, postId, onChange, onBlur, loading, onSubmit }) => {
  const { body, errors } = comment;
  return (
      <Container>
      <div>

          <Col className="mx-auto">

            <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
              <Textarea
                  name="body"
                  placeholder="Write your comment here..."
                  value={body}
                  onChange={onChange}
                  onBlur={onBlur}
                  text={{
                    module: "post",
                    label: "Comment",
                    error: errors.body
                  }}
              />
              <Button
                  variant="success"
                  type="submit"
                  disabled={loading}
                  style={{
                    marginBottom:"20px",
                    marginTop:"15px",
                    marginRight:"10px",
                  }}
              >
                Submit
              </Button>

              <Link to={`/post/${postId}`}>
              <Button
                  variant="danger"
                  style={{
                    marginBottom:"20px",
                    marginTop:"15px"
                  }}
              >
                Cancel
              </Button>
              </Link>

            </Form>

          </Col>
        </div>

      </Container>
  );
};

CommentForm.propTypes = {
  comment: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CommentForm;
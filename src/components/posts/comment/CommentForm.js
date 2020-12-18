import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Textarea from "../../form/Textarea";
import {Link} from "react-router-dom";


const CommentForm = ({ comment, postId, onChange, onBlur, loading, onSubmit }) => {
  const { body, errors } = comment;
  return (
      <Container>
        <Row>
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
                  variant="outline-danger"
                  type="submit"
                  disabled={loading}
                  className="mt-3"
              >
                Submit
              </Button>

              <Link to={`/blog/post/${postId}`}>
              <Button
                  variant="outline-danger"
                  className="mt-3 ml-3"
              >
                Cancel
              </Button>
              </Link>

            </Form>
          </Col>
        </Row>
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
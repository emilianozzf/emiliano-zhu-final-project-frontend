import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import Input from "../form/Input";//
import Textarea from "../../form/Textarea";


const CommentForm = ({ post, onChange, onBlur, loading, onSubmit }) => {
  const { body, errors } = post;
  return (
      <Container>
        <Row>
          <Col className="mx-auto">
            <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
              {/*<Input*/}
              {/*    name="title"*/}
              {/*    type="text"*/}
              {/*    placeholder="Enter Post Title"*/}
              {/*    value={title}*/}
              {/*    onChange={onChange}*/}
              {/*    onBlur={onBlur}*/}
              {/*    text={{*/}
              {/*      module: "post",*/}
              {/*      label: "Title",*/}
              {/*      error: errors.title*/}
              {/*    }}*/}
              {/*/>*/}
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
            </Form>
          </Col>
        </Row>
      </Container>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CommentForm;
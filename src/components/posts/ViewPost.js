import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./post.scss";
import Comment from "./comment/Comment";
import {Link} from "react-router-dom";
import ListComment from "./comment/ListComment";
import {getCommentByID} from "../../actions/commentActions";

const ViewPost = ({ post, auth, onDelete, onEdit, onReply }) => {
   const postDate = getFormattedDate(post.date);
   // console.log(post.author);
   // console.log(JSON.stringify(auth.user.user_name));
  var user_id = (auth.isAuthenticated) ? JSON.stringify(auth.user.id).slice(1,-1):""
  // console.log(post.author);
  // console.log(user_id);
  // console.log(post.author.id === user_id);
  // console.log(post.comments[0]);
   //false???
  const comment = getCommentByID(post.comments[0]);
  // console.log(comment)

   return (
      <Container className="mt-4 viewPost">
         <Row>
            <Col className="text-center postTitle">
               <h2>{post.title}</h2>
            </Col>
         </Row>
         <Row className="my-4" style={{ whiteSpace: "pre-wrap" }}>
            <Col>{post.body}</Col>
         </Row>
         <Row className="d-flex flex-column font-italic footerStyle">
            <Col>Created by : {post.author.user_name}</Col>
            <Col>Date: {postDate}</Col>
         </Row>
         if (auth)
         {(auth.isAuthenticated && user_id === post.author.id) ? (
            <Row className="mt-4 mb-5">
               <Col className="text-center">
                  <Button
                     className="mr-2"
                     variant="outline-info"
                     onClick={onEdit}
                  >
                     Edit
                  </Button>
                  <Button className="mr-2" variant="outline-danger"  onClick={onDelete}>
                     Delete
                  </Button>
                 {/*TODO: onclick = onComment*/}
                 <Button variant="outline-success" onClick={onReply}>
                   Reply
                 </Button>
               </Col>
            </Row>
         ):
             <Row className="mt-4 mb-5">
               <Col className="text-center">
                 {/*TODO: onclick = onComment*/}
                 {/*<Link to="/blog/post/${post._id}/create_comment">*/}
                 <Button variant="outline-success" onClick={onReply}>
                   Reply
                 </Button>
                 {/*</Link>*/}
               </Col>
             </Row>
         }
         <p className="text-light bg-dark font-weight-bold">Comments</p>
         {/*<Comment*/}
         {/*    auth={auth}*/}
         {/*    comment={post.comments}*/}
         {/*    onDelete={onDelete}*/}
         {/*    onEdit={onEdit}*/}
         {/*>*/}

         {/*</Comment>*/}

        {/*<ListComment*/}
        {/*    auth={auth}*/}
        {/*    comment={post.comments}*/}
        {/*    onDelete={onDelete}*/}
        {/*    onEdit={onEdit}*/}
        {/*>*/}

        {/*</ListComment>*/}
      </Container>
   );
};

ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewPost;

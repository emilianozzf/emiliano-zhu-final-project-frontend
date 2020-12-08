import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";


const Post = ({ post }) => {
   const postDate = getFormattedDate(post.date);
   return (

      <Card className="deckStyle" style={{ border: "none" }}>
        {/*<Card.Header>{post.author}</Card.Header>*/}
        {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
         <Card.Body className="postCover">
            <Card.Title className="text-center p-5">{post.title}</Card.Title>
            {/*<Card.Text className="mb-2">{post.author}</Card.Text>*/}
         </Card.Body>
         <Card.Footer>
            <small className="text-muted">Author: {post.author.user_name}</small>
           <br/>
            <small className="text-muted">Posted on: {postDate}</small>
         </Card.Footer>
      </Card>
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;

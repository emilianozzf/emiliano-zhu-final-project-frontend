import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import PropTypes from "prop-types";
import "./post.scss";
import {CardDeck, CardGroup, CardColumns} from "react-bootstrap";

const ListPost = ({ posts }) => {
   return (
      <div className="row">
         {posts.map(post => (
             <div className="col-sm-6 col-md-4">
            <Link to={`/post/${post._id}`} key={post._id}>
               <Post post={post} />
            </Link>
                </div>
         ))}


      </div>
   );
};

ListPost.propTypes = {
   posts: PropTypes.array.isRequired
};

export default ListPost;

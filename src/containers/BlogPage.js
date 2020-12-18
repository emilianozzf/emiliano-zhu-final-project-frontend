import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Blog from "../components/user/Blog";
import { getPosts, getPostsByAuthor } from "../actions/postActions";


const BlogPage = ({
   isAuthenticated,
   getPostsByAuthor,
   getPosts,
   match,
   posts
}) => {
   useEffect(() => {
      // isAuthenticated ? getPosts() : getPostsByAuthor(match.params.author);
      getPosts();
   }, [isAuthenticated, getPosts, getPostsByAuthor, match]);
   // console.log(JSON.stringify(posts));
   // console.log(posts[0]);
   return (

       <div>
          {/*<Navbar />*/}
          {/*<Jumbotron />*/}
         <Blog posts={posts} auth={isAuthenticated} />
       </div>
       );
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   posts: state.post.posts
});

BlogPage.propTypes = {
   posts: PropTypes.array.isRequired,
   isAuthenticated: PropTypes.bool.isRequired,
   getPosts: PropTypes.func.isRequired,
   getPostsByAuthor: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPostsByAuthor, getPosts }
)(BlogPage);

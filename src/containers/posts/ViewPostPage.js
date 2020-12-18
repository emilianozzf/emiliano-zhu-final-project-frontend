import React, { useEffect } from "react";
import ViewPost from "../../components/posts/ViewPost";
import { deletePost, getPostByID } from "../../actions/postActions";
import {getCommentByID} from "../../actions/commentActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ViewPostPage = ({
   auth,
   post,
   match,
   history,
   getPostByID,
   deletePost,
   commentIDs,
   getCommentByID,
    comment,
}) => {
   // const [comment, setPost] = useState({
   //    title: "",
   //    body: "",
   //    errors: {}
   // });


   // console.log(match);
   useEffect(() => {
      getPostByID(match.params.id);

   }, [match, getPostByID]);


   // useEffect(() => {
   //    getCommentByID(post.comments[0]);
   //
   // }, [match, getCommentByID]);
   // useEffect(() => {
   //       // getPostByID(match.params.id);
   //    const comments = post.comments.map(commentID => getCommentByID(commentID))
   //    console.log(comments)
   //
   //    }, [match, getPostByID]);

   // console.log(post);
   // console.log(post.comments);
   // console.log(post.comments[0]);
   // const a = JSON.stringify(post.comments);

   // var a = post.comments[0]
   // console.log(typeof a);
   // const comments = post.comments.map(commentID => getCommentByID(commentID))
   // console.log(a)
   // console.log(a[1])
   // console.log(post.comments)

   const handleEdit = () => {
      history.push(`/blog/post/update/${post._id}`);
   };

   const handleReply = () => {
      history.push(`/blog/post/${post._id}/create_comment`);
   };

   const handleDelete = () => {
      deletePost(post._id, history);
   };
   // console.log(post.comments[0]);
   if (Object.keys(post).length === 0) return <div />;
   return (
      <ViewPost
         post={post}
         auth={auth}
         onDelete={handleDelete}
         onEdit={handleEdit}
         onReply={handleReply}
      />
   );
};

const mapStateToProps = state => ({
   auth: state.auth,
   post: state.post.post,
   comment:state.comment.comment
});

ViewPostPage.propTypes = {
   auth: PropTypes.object.isRequired,
   post: PropTypes.object.isRequired,
   getPostByID: PropTypes.func.isRequired,
   getCommentByID: PropTypes.func.isRequired,
   deletePost: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPostByID, deletePost, getCommentByID }
)(ViewPostPage);

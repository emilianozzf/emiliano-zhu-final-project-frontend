import axios from "axios";
import {
  CREATE_COMMENT,
    GET_COMMENT,
  TOGGLE_POSTS_LOADING,
  TOGGLE_POST_LOADING, GET_POST,
} from "./types";

import { setErrors, clearErrors } from "./errorActions";

// '/api/posts/:id/comments'

export const createComment = (commentData, history, postId) => dispatch => {
  // dispatch(togglePostLoading());
  // console.log(commentData);
  // console.log("commentData:"+ JSON.stringify(commentData));
  // console.log("history:"+ JSON.stringify(history));
  // console.log("postid:"+postId);
  // app.use('/api/comments', comments);
  axios
  .post(`/api/comments/${postId}/create`, commentData)
  // .post(`/api/posts/${postId}/comments/create`, commentData)
  .then(res => {
    // console.log("send:"+res)
    dispatch({
      type: CREATE_COMMENT,
      payload: res.data
    });

    // dispatch(togglePostLoading());
    history.push(`/blog/post/${postId}`);
  })
  .catch(err => {
    // console.log(err)
    dispatch(setErrors(err.response.data));
    // dispatch(togglePostLoading());
  });
};


// router.get('/get/:id', (req, res) => {
export const getCommentByID = (id) => dispatch => {
  dispatch(togglePostLoading());
  console.log(id);
  axios
  .get(`/api/comments/get/${id}`)
  .then(res => {
    console.log(res)
    dispatch({
      type: GET_COMMENT,
      payload: res.data
    });
    dispatch(clearErrors());
    dispatch(togglePostLoading());
  })

  .catch(err => {
    dispatch(setErrors(err.response.data));
    dispatch(togglePostLoading());
  });
};

export const togglePostLoading = () => {
  return {
    type: TOGGLE_POST_LOADING
  };
};

export const togglePostsLoading = () => {
  return {
    type: TOGGLE_POSTS_LOADING
  };
};
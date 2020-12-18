import axios from "axios";
import {
  CREATE_COMMENT,
  DELETE_POST,
} from "./types";

import { setErrors } from "./errorActions";

export const createComment = (commentData, history, postId) => dispatch => {
  axios
  .post(`https://emiliano-zhu-final-backend.herokuapp.com/api/comments/${postId}/create`, commentData)
  .then(res => {
    dispatch({
      type: CREATE_COMMENT,
      payload: res.data
    });
    history.push(`/post/${postId}`);
  })
  .catch(err => {
    dispatch(setErrors(err.response.data));
  });
};


export const deleteComment = (id, history,postId) => dispatch => {
  // dispatch(togglePostLoading());
  axios
  .delete(`https://emiliano-zhu-final-backend.herokuapp.com/api/comments/delete/${id}`)
  .then(res => {
    dispatch({
      type: DELETE_POST,
      payload: id
    });
    // dispatch(togglePostLoading());
    history.push(`/post/${postId}`);
  })
  .catch(err => {
    dispatch(setErrors(err.response.data));
    // dispatch(togglePostLoading());
  });
};

import {
  RESET_POST,
  CREATE_POST,
  GET_COMMENT,
  GET_COMMENTS,
  UPDATE_POST,
  DELETE_POST,
  TOGGLE_POSTS_LOADING,
  TOGGLE_POST_LOADING,
    CREATE_COMMENT
} from "../actions/types";

const initialState = {
  comment: {},
  comments: [],
  postLoading: false,
  postsLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case GET_COMMENTS:
      return {
        ...state,
        comment: {},
        comments: [...action.payload]
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: { ...action.payload[0] }
      };
    // case UPDATE_POST:
    //   const posts = state.posts.filter(
    //       post => post._id !== action.payload._id
    //   );
    //   return {
    //     ...state,
    //     post: {},
    //     posts: [...posts, action.payload]
    //   };
    // case DELETE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.filter(post => post._id !== action.payload)
    //   };
    // case TOGGLE_POST_LOADING:
    //   return {
    //     ...state,
    //     postLoading: !state.postLoading
    //   };
    // case TOGGLE_POSTS_LOADING:
    //   return {
    //     ...state,
    //     postsLoading: !state.postsLoading
    //   };
    // case RESET_POST:
    //   return initialState;
    default:
      return state;
  }
}

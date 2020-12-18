import {
  CREATE_COMMENT
} from "../actions/types";

const initialState = {
  comments: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    // case GET_COMMENTS:
    //   return {
    //     ...state,
    //     comment: {},
    //     comments: [...action.payload]
    //   };
    // case GET_COMMENT:
    //   return {
    //     ...state,
    //     comment: { ...action.payload[0] }
    //   };
    default:
      return state;
  }
}

import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

export default combineReducers({
   auth: authReducer,
   post: postReducer,
   comment: commentReducer,
   errors: errorReducer

});

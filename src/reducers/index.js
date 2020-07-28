import userReducer from "./userReducer";
import commentReducer from "./commentReducer";
import linkReducer from "./linkReducer";
import topicReducer from "./topicReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  commentReducer,
  linkReducer,
  topicReducer,
});

export default rootReducer;

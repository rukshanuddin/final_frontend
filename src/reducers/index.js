import userReducer from "./userReducer";
import comments from "./commentReducer";
import links from "./linkReducer";
import topics from "./topicReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  comments,
  links,
  topics,
});

export default rootReducer;

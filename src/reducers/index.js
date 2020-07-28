import userReducer from "./userReducer";
import comments from "./commentReducer";
import links from "./linksReducer";
import link from "./linkReducer";
import topics from "./topicsReducer";
import topic from "./topicReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  comments,
  links,
  link,
  topics,
  topic
});

export default rootReducer;

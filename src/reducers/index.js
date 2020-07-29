import userReducer from "./userReducer";
import comments from "./commentsReducer";
import links from "./linksReducer";
import link from "./linkReducer";
import topics from "./topicsReducer";
import topic from "./topicReducer";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    comments,
    links,
    link,
    topics,
    topic,
  });

export default createRootReducer;

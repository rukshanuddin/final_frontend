import React from "react";
import { connect } from "react-redux";


const TopicItem = ({ topic}) => {
  return (
    <li className="collection-item">
      Topic Name: {topic.name}
      <br />
      img: {topic.img} <br />
    </li>
  );
};

export default connect(null)(TopicItem);

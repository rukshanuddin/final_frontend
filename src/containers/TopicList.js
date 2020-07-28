import React, { Component } from "react";
import TopicItem from "../components/TopicItem";
import { connect } from "react-redux";
import { fetchTopics } from "../actions/topicActions";

class TopicList extends Component {


  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    const topics = this.props.topics.map((topic, i) => (
      <TopicItem key={i} topic={topic} />
    ));
    return (
      <div>
        <h3>Topic List</h3>
        <ul className="collection">{topics}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
  };
};

export default connect(mapStateToProps, { fetchTopics })(TopicList);

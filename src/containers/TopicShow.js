import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTopics } from "../actions/topicActions";
import { fetchTopicLinks } from '../actions/linkActions'
import LinkItem from "../components/LinkItem";


class TopicShow extends Component {

  componentDidMount() {
    this.props.fetchTopics();
    let paramsId = parseInt(this.props.match.params.id, 10);
    this.props.fetchTopicLinks(paramsId);
  }

  render() {
    const links = this.props.links.map((link, i) => (
      <LinkItem key={i} link={link} />
    ));
    let topic = this.props.topics.find(
      (topic) => topic.id === parseInt(this.props.match.params.id, 10)
    );
    debugger;
    return (
      <div>
        <h3>{topic ? topic.name : "List of Links"}</h3>
        <ul className="collection">{links}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    links: state.links,
  };
};

export default connect(mapStateToProps, { fetchTopics,fetchTopicLinks })(
  TopicShow
);

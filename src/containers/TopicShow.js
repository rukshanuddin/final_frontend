import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTopic } from "../actions/topicActions";
import { fetchTopicLinks } from '../actions/linkActions'
import LinkItem from "../components/LinkItem";


class TopicShow extends Component {

  componentDidMount() {
    
    let paramsId = parseInt(this.props.match.params.id, 10);
    this.props.fetchTopic(paramsId);

    
  }

  render() {
    // const links = this.props.topic.links.map((link, i) => (
    //   <LinkItem key={i} link={link} />
    // ));
    let topic = this.props.topic
    debugger;
    return (
      <div>
        <h3>{topic ? topic.name : "List of Links"}</h3>
        {/* <ul className="collection">{links}</ul> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topic: state.topic,
  };
};

export default connect(mapStateToProps, { fetchTopic,fetchTopicLinks })(
  TopicShow
);

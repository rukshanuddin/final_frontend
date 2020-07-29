import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTopic } from "../actions/topicActions";
import { fetchTopicLinks } from "../actions/linkActions";

import LinksList from "../components/LinkList";
import { Typography, Paper } from "@material-ui/core";

class TopicShow extends Component {
  componentDidMount() {
    let paramsId = parseInt(this.props.match.params.id, 10);
    this.props.fetchTopic(paramsId);
  }

  render() {
    let topic = this.props.topic;
    let links = this.props.links;

    return (
      <Paper
        elevation={24}
        square={true}
        style={{
          margin: "auto",
          marginBottom: "2em",
          textAlign: "center",
          flexDirection: "column",
          paddingBottom: "2em",
          alignItems: "center",
          width: "95%",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          style={{ textAlign: "center", paddingTop: "1em" }}
        >
          {topic.name}
        </Typography>

        <Paper
          square={true}
          elevation={15}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "1em",
            margin: "2em",
            width: "95%",
          }}
        >
          <LinksList links={links} />
        </Paper>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topic: state.topic,
    links: state.topic.links,
  };
};

export default connect(mapStateToProps, { fetchTopic, fetchTopicLinks })(
  TopicShow
);

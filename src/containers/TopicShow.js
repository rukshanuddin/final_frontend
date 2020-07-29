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
      <Paper style={{ marginBottom: "1em" }}>
        <Paper
          elevation={24}
          square={true}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "1em",
            paddingBottom: "1em",
            margin: "2em",
            width: "95%",
          }}
        >
          <Paper
            square={true}
            elevation={15}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "1em",
              paddingBottom: "1em",
              margin: "2em",
              width: "95%",
            }}
          >
            <Typography variant="h3" component="h3">
              {topic.name}
            </Typography>
          </Paper>

          <Paper
            square={true}
            elevation={15}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "1em",
              paddingBottom: "1em",
              margin: "2em",
              width: "95%",
            }}
          >
            <LinksList links={links} />
          </Paper>
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

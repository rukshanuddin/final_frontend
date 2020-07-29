import React, { Component } from "react";
import TopicItem from "../components/TopicItem";
import { connect } from "react-redux";
import { fetchTopics } from "../actions/topicActions";
import { GridList, GridListTile, Paper, Typography } from "@material-ui/core";

class TopicList extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    const topics = this.props.topics.map((topic, i) => (
      <TopicItem key={i} topic={topic} />
    ));
    return (
      <Paper
        elevation={24}
        square={true}
        style={{
          margin: "auto",
          flexDirection: "column",
          alignItems: "center",

          width: "95%",
        }}
      >
        <GridList
          cellHeight={250}
          className="TopicList"
          style={{
            textAlign: "center",
            height: "auto",
            width: "95%",
            margin: "auto",
          }}
        >
          <GridListTile
            key="Subheader"
            cols={2}
            style={{ textAlign: "center", height: "auto", padding: "auto" }}
          >
            <Typography variant="h2" component="h3" align="center">
              Topics
            </Typography>
            <Typography variant="subtitle1" component="p" align="center">
              Click on a tile to see the links available for that topic!
            </Typography>
          </GridListTile>
          {topics}
        </GridList>
      </Paper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    topics: state.topics,
  };
};

export default connect(mapStateToProps, { fetchTopics })(TopicList);

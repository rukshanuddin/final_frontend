import React, { Component } from "react";
import { connect } from "react-redux";
import CommentCard from "../components/CommentCard";
import { removeComment, fetchComments } from "../actions/commentActions";
import { Typography, Paper } from "@material-ui/core";

class Comments extends Component {
  render() {
    return (
      <Paper
        square={true}
        elevation={16}
        style={{
          width: "95%",
          padding: "1em",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <hr />
        <Typography style={{textAlign:"center"}}>Comments</Typography>
        <hr />
        {this.props.comments.map((comment, i) => (
          <CommentCard
            key={comment.id}
            removeComment={this.props.removeComment}
            comment={comment}
          />
        ))}
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, {
  removeComment,
  fetchComments,
})(Comments);

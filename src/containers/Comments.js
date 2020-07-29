import React, { Component } from "react";
import { connect } from "react-redux";
import CommentCard from "../components/CommentCard";
import { removeComment , fetchComments} from "../actions/commentActions";
// import { Typography, Paper } from "@material-ui/core";

class Comments extends Component {

  render() {
      
    
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Comments</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.comments.map((comment, i) => (
      <CommentCard
                  key={comment.id}
                  removeComment={this.props.removeComment}
                  comment={comment}
                />
    ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, {
  removeComment, fetchComments
})(Comments);

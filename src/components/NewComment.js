import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../actions/commentActions";
import { Typography, Button, TextField } from "@material-ui/core";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
  }
  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const comment = { ...this.state };
    this.props.addComment(this.props.link.id, comment);
    // this.props.history.push(`/links/${this.props.link.id}`);
  };

  render() {
    if (this.props.userReducer.loggedIn) {
      return (
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="body">Post your Comment</label>
          <hr />
          <TextField
            fullWidth
            name="body"
            value={this.state.body}
            onChange={this.handleOnChange}
          />
          <hr />
          <Button type="submit">Submit</Button>
        </form>
      );
    } else {
      return (
        <Typography
          variant="h2"
          component="p"
          style={{ color: "red", textAlign: "center" }}
        >
          Please login to post/delete comments
        </Typography>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    link: state.link,
    comments: state.comments,
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, { addComment })(CommentForm);

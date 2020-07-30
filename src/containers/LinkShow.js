import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLink } from "../actions/linkActions";
import { fetchComments } from "../actions/commentActions";
import { Typography, Link, Paper } from "@material-ui/core";
import NewComment from "../components/NewComment";
import Comments from "./Comments";

class LinkShow extends Component {
  componentDidMount() {
    let paramsId = parseInt(this.props.match.params.id, 10);
    this.props.fetchLink(paramsId);
    this.props.fetchComments(paramsId);
  }

  render() {
    const showLink = this.props.link;
    return (
      <Paper
        square={true}
        elevation={13}
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1em",
          margin: "2em",
        }}
      >
        <Typography
          square={true}
          elevation={14}
          variant="h3"
          component="h2"
          style={{ padding: "1em" }}
        >
          {showLink.name}
        </Typography>
        <Paper
          square={true}
          elevation={14}
          style={{
            width: "95%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1em",
            margin: "2em",
          }}
        >
          <Paper
            square={true}
            elevation={15}
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "justify",
              padding: "1em",
              margin: "2em",
            }}
          >
            <Typography variant="subtitle1">
              <strong>Description</strong>
              <hr />
              <em>{showLink.blurb}</em>
            </Typography>
            <br />
            <Typography variant="subtitle2">
              <strong>Flatiron School Section</strong> : {showLink.section}
            </Typography>
            <Typography variant="subtitle2">
              <strong>Category</strong> : {showLink.section}
            </Typography>
            <Typography variant="subtitle2">
              <strong>Languages/Frameworks</strong> :{showLink.language}
            </Typography>
            <Paper
              square={true}
              elevation={14}
              style={{
                width: "95%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1em",
                margin: "auto",
                marginTop: "2em",
                marginBottom: "2em",
              }}
            >
              <Comments
                props={this.props}
                link={showLink}
                comments={this.props.comments}
              />
              <br />
              <Paper
                square={true}
                elevation={14}
                style={{
                  width: "95%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1em",
                  margin: "auto",
                  marginTop: "2em",
                  marginBottom: "2em",
                }}
              >
                <NewComment props={this.props} link={showLink} />
              </Paper>
            </Paper>
          </Paper>

          <Link href={showLink.url} target="blank">
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
              <Typography
                variant="h3"
                component="p"
                style={{ textAlign: "center" }}
              >
                <em>
                  <strong>Click Me!</strong>
                </em><br/>
                <small>Visit link in new window!</small>
              </Typography>
            </Paper>
          </Link>
        </Paper>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    link: state.link,
    comments: state.comments,
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, { fetchLink, fetchComments })(LinkShow);

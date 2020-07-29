import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLinks } from "../actions/linkActions";
import LinksList from "../components/LinkList";
import { Paper, Typography } from "@material-ui/core";

class AllLinks extends Component {
  componentDidMount() {
    this.props.fetchLinks();
  }

  render() {
    const links = this.props.links
    
    return (
      <div>
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
          <Typography
            variant="h3"
            component="h3"
            style={{ textAlign: "center", paddingTop: "1em" }}
          >
            All the Links!
          </Typography>

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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links,
  };
};

export default connect(mapStateToProps, { fetchLinks })(AllLinks);

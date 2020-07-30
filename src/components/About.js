import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

import logo from "../resources/flation.jpeg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "auto",
    margin: "2em",
    width: "95%",
  },
  image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "auto",
    margin: "0",
    width: "100%",
  },
  img: {
    height: "25em",
  },
});

const About = ({ classes }) => (
  <Paper square={true} elevation={11} className={classes.root}>
    <Link
      to={{
        pathname: `/`,
      }}
    >
      <Paper square={true} elevation={12} className={classes.image}>
        <img src={logo} alt="flatiron" className={classes.img} />
      </Paper>
    </Link>
    <Paper square={true} elevation={12} className={classes.root}>
      <Typography
        variant="h4"
        paragraph
        style={{ padding: "1em", textAlign: "justify" }}
      >
        Welcome to BLOCK or as I’ve come to lovingly call it, my “Big Ass List
        of Code Knowledge”!
      </Typography>
      <Typography
        variant="h6"
        paragraph
        style={{ padding: "1em", textAlign: "justify" }}
      >
        As I’m sure many of you have experienced, there is a crazy amount of
        information out there and it can get overwhelming to just properly
        organize it, let alone read and learn from it! I definitely feel this
        way, which is why I started this list specifically for Flatiron students
        to reference. Please use these resources, add your own, and share it out
        with other Flatiron codepanions! Here’s the shortened link to make
        sharing easier: <br />
        <a href="http://bit.ly/flatiron-student-resources">Link</a>
        <hr />
        http://bit.ly/flatiron-student-resources
        <br />
        If you have any questions, DM meg-gutshall on Flatiron's Slack.
      </Typography>

      <Typography variant="h6" paragraph style={{ padding: "3em" }}>
        <em>
          I want to state for the record that this is not an official Flatiron
          School resource. Flatiron provides many resources, including: Slack,
          “Ask A Question”, the Learn Help articles, and the Learn Instruct
          searchable video database (and there may be others that I’ve missed).
        </em>
      </Typography>

      <Typography variant="subtitle1" paragraph style={{ padding: "2em" }}>
        <em>
          <strong>
            {" "}
            Check out{" "}
            <a href="https://www.flatironschool.com">Flatiron School</a> if you
            would like to get started in tech!
          </strong>
        </em>
      </Typography>
    </Paper>
  </Paper>
);

export default withStyles(styles)(About);

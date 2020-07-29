import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "1em",
    paddingBottom: "1em",
    margin: "2em",
    width: "95%",
  },
});

const Title = ({classes}) => (
    <Paper square={true} elevation={12} className={classes.root}>
      <Typography variant="h1" component="h1" align="center">
        The B.L.O.C.K.
      </Typography>
      <Typography variant="h4" component="h2" align="center">
        Flatiron School's Big-Ass List of Code Knowledge
      </Typography>
    </Paper>
  );


export default withStyles(styles)(Title);

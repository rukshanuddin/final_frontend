import React, { Component } from "react";
import { connect } from "react-redux";
import { logUserOut } from "../actions/userActions";
import { Typography, Paper, Button } from "@material-ui/core";

class Logout extends Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.logUserOut();
    this.props.history.push("/")
  };

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Paper
          square={true}
          elevation={23}
          style={{
            padding: "1em",
            marginTop: "1em",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography variant="h4" component="h3" align="center">
            Logout
          </Typography>
          <Typography variant="subtitle1" component="p" align="center">
            Are you sure you want to go?
          </Typography>
          <Paper style={{ marginTop: "1em", padding: "1em" }}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              color="primary"
              onClick={this.onClick}
              value="Login"
              style={{ marginTop: "1em" }}
            >
              Logout
            </Button>
          </Paper>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);

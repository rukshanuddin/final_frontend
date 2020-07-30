import React, { Component } from "react";
import { connect } from "react-redux";
import { logUserOut } from "../actions/userActions";
import { Typography, Paper, Button } from "@material-ui/core";
import hello from "../resources/hello.svg";
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
          <Paper
            square={true}
            elevation={12}
            style={{
              padding: "1em",
              marginTop: "1em",
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Typography variant="h3" component="h3" align="center">
              Logout
            </Typography>
            <Typography variant="subtitle1" component="p" align="center">
              <em>Are you sure you want to go?</em>
            </Typography>
          </Paper>
          <Paper
            square={true}
            elevation={12}
            style={{
              padding: "1em",
              marginTop: "1em",
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img src={hello} alt="welcome" style={{ height: "25em" }} />
          </Paper>
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

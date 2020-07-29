import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { Typography, Paper, Button, TextField } from "@material-ui/core";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchUser(this.state);
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
            Login Form
          </Typography>
          <Typography variant="subtitle1" component="p" align="center">
            If you haven't please register above
          </Typography>
          <Paper style={{ marginTop: "1em", padding: "1em" }}>
            <form onSubmit={this.handleLogin} noValidate autoComplete="off">
              <TextField
                required
                type="email"
                name="email"
                placeholder="E-mail"
                value={this.state.email}
                fullWidth
                onChange={this.handleOnChange}
                label="Required"
                variant="filled"
                helperText="We will never share your e-mail!"
              />
              <TextField
                required
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
                value={this.state.password}
                onChange={this.handleOnChange}
                variant="filled"
                helperText="Enter your password"
              />
              <Button
                variant="contained"
                fullWidth
                size="large"
                color="primary"
                type="submit"
                style={{ marginTop: "1em" }}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Login);

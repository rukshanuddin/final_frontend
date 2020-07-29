import React, { Component } from "react";
import { connect } from "react-redux";
import { signUserUp } from "../actions/userActions";
import { Paper, Typography, TextField, Button } from "@material-ui/core";

class SignUpComponent extends Component {
  state = {
    first_name: "",
    last_name: "",
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
    this.props.signUserUp(this.state);
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
            Sign-up Page
          </Typography>
          <Typography variant="subtitle1" component="p" align="center">
            Sign up to leave comments!
          </Typography>
          <Paper>
            <Paper style={{ marginTop: "1em", padding: "1em" }}>
              <form onSubmit={this.onSubmit}>
                <TextField
                  required
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.handleOnChange}
                  label="First"
                  variant="filled"
                  fullWidth
                  helperText="We will never share your e-mail!"
                />
                <TextField
                  required
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleOnChange}
                  variant="filled"
                  fullWidth
                  helperText="Enter your password"
                />
                <TextField
                  required
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={this.handleOnChange}
                  label="Required"
                  variant="filled"
                  fullWidth
                  helperText="We will never share your e-mail!"
                />
                <TextField
                  required
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleOnChange}
                  variant="filled"
                  fullWidth
                  helperText="Enter your password"
                />

                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Register
                </Button>
              </form>
            </Paper>
          </Paper>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpComponent);

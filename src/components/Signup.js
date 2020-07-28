import React, {Component} from "react";
import { connect } from "react-redux";
import { signUserUp } from "../actions/userActions";

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
      <div>
        <h1>SignUp Form</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <br />
          <input type="submit" value="Signup" />
        </form>
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

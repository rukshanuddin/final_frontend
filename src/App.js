import React, {Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Login from "./components/Login";
import Signup from "./components/Signup";


class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        {!this.props.userReducer.loggedIn ? (
          <h1>Sign Up or Login!</h1>
        ) : (
          <h1>Welcome, {this.props.userReducer.user.first_name}</h1>
        )}
        <Signup />
        <Login />
        <button>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};


export default connect(mapStateToProps)(App);

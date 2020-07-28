import React, {Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TopicList from "./containers/TopicList";
import AllLinks from "./containers/AllLinks"


class App extends Component {

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        {!this.props.userReducer.loggedIn ? (
          <h1>Sign Up or Login!</h1>
        ) : (
          <h1>Welcome, {this.props.userReducer.user.first_name}</h1>
        )}
        {/* <TopicList /> */}
        <Router>
          <Route exact path="/topics" component={TopicList} />
        </Router>
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
    topicReducer: state.topicReducer,
  };
};


export default connect(mapStateToProps)(App);

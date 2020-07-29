import React, { Component } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Sidebar from "./navigation/Sidebar";
import { Paper } from "@material-ui/core";
import Title from "./components/Title";
import Home from "./components/Home";
import TopicList from "./containers/TopicList";
import TopicShow from "./containers/TopicShow";
import LinkShow from "./containers/LinkShow";
import NotFound from "./components/NotFound";
import AllLinks from "./containers/AllLinks";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { fetchProfile } from "./actions/userActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchProfile(localStorage.getItem("token"));
  }
  render() {
    return (
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <Sidebar />

          <Paper
            square={true}
            elevation={10}
            style={{ height: "100%", flexGrow: 1 }}
          >
            <Title />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/topics" component={TopicList} />
              <Route
                exact
                path="/topics/:id"
                render={(props) => (
                  <TopicShow {...props} topics={this.props.topics} />
                )}
              />
              <Route exact path="/links" component={AllLinks} />
              <Route
                exact
                path="/links/:id"
                render={(props) => (
                  <LinkShow {...props} links={this.props.links} />
                )}
              />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Paper>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => dispatch(fetchProfile(localStorage.getItem("token"))),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

import React from "react";
import { Route, Switch } from "react-router";

import Bar from "../navigation/Bar";
import { Paper } from "@material-ui/core";
import Title from "../components/Title";
import Home from "../components/Home";
import TopicList from "../containers/TopicList";
import TopicShow from "../containers/TopicShow";
import LinkShow from "../containers/LinkShow";
import NotFound from "../components/NotFound";
import AllLinks from "../containers/AllLinks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import About from '../components/About'
import Logout from '../components/Logout'


const routes = (
  <Switch>
  <div style={{ display: "flex" }}>
    <Bar />
    <Paper square={true} elevation={10} style={{ height: "100%", flexGrow: 1 }}>
      <Title />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/topics" component={TopicList} />
        <Route
          exact
          path="/topics/:id"
          render={(routeProps) => <TopicShow {...routeProps} />}
        />
        <Route exact path="/links" component={AllLinks} />
        <Route
          exact
          path="/links/:id"
          render={(routeProps) => <LinkShow {...routeProps} />}
        />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </Paper>
  </div>
  </Switch>
);

export default routes;
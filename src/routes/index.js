import React from "react";
import { Route, Switch } from "react-router";

import Sidebar from "../navigation/Sidebar";
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


const routes = (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <Paper square={true} elevation={10} style={{ height: "100%", flexGrow: 1 }}>
      <Title />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/topics" component={TopicList} />
        <Route
          exact
          path="/topics/:id"
          render={(routeProps) => (
            <TopicShow {...routeProps}  />
          )}
        />
        <Route exact path="/links" component={AllLinks} />
        <Route
          exact
          path="/links/:id"
          render={(routeProps) => (
            <LinkShow {...routeProps}  />
          )}
        />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Paper>
  </div>
);

export default routes;
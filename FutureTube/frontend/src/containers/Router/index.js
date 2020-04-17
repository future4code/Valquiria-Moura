import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignUp from "../SignUp";

export const routes = {
  root: "/",
  signUp: "/signup"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.signUp} component={SignUp} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
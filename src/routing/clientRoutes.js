import React from "react";
import { Switch, Route } from "react-router-dom";
import SVG from "../containers/svg";

const Routes = () => (
  <Switch>
    <Route path="/" render={props => <SVG {...props} />} exact />
  </Switch>
);

export default Routes;

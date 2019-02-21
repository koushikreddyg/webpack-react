import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "../containers/counter";
import A from "../components/A";
import B from "../components/B";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" render={props => <Counter {...props} />} exact />
      <Route path="/a" render={props => <A {...props} />} exact />
      <Route path="/b" render={props => <B {...props} />} />
    </Switch>
  </Router>
);

export default Routes;

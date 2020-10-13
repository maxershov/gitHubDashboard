import React from "preact/compat";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Card from "./Card";
import Error from "./Error";

const RoutesContent = props => {
  return (
    <Switch>
      <Route exact path={["/gh-dash/", "/"]} component={Main} />
      <Route exact path="/card/:id" component={Card} />
      <Route exact path="/error/:code?" component={Error} />
    </Switch>
  );
}


export default RoutesContent;
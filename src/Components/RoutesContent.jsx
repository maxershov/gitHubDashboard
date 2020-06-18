import React from "preact/compat";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./Main";
import Card from "./Card";
import Error from "./Error";

const RoutesContent = props => {
  return (
    <Switch>
      <Route exact path="/main/" component={Main} />
      <Route exact path="/card/:id" component={Card} />
      <Route exact path="/error/:code?" component={Error} />
      <Redirect exact from="/" to="/main/" />
    </Switch>
  );
}


export default RoutesContent;
import React from "preact/compat";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./Main";
import Card from "./Card";


const RoutesContent = props => {
  return (
    <Switch>
      <Route exact path="/main/:pageNum" component={Main} />
      <Route exact path="/card" component={Card} />
      <Redirect exact from="/" to="/main/1" />
    </Switch>
  );
}


export default RoutesContent;
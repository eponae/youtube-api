import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/home/Home";
import { Videos } from "../components/video/Videos";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home" children={<Home />} />
      <Route exact path="/videos" children={<Videos />} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default AppRoutes;

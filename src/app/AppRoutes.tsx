import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/home/Home";
import { Videos } from "../components/video/Videos";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home" children={<Home />} />
      <Route exact path="/home/videos" children={<Videos />} />
      <Route exact path="/home/videos/:videoId" children={<div />} />
      <Redirect path="/" to="/home" />
    </Switch>
  );
};

export default AppRoutes;

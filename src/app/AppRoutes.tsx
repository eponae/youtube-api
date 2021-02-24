import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/home/Home";
import Videos from "../components/video/Videos";
import Video from "../components/video/Video";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home" children={<Home />} />
      <Route exact path="/home/videos" children={<Videos />} />
      <Route exact path="/home/videos/:videoId" children={<Video />} />
      <Redirect path="/" to="/home" />
    </Switch>
  );
};

export default AppRoutes;

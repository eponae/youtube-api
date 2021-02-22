import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

const AppProviders: FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProviders;

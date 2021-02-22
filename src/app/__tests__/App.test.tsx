import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders app without error", () => {
  render(<App />);
  const linkElement = screen.getByText("Channel name");
  expect(linkElement).toBeInTheDocument();
});

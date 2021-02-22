import React from "react";
import { useLocation } from "react-router-dom";
import { SearchItem } from "../home/home.type";
import { VideosLineWrapper } from "./Videos.style";

export const Videos = () => {
  const location: { state: Array<SearchItem> } = useLocation();
  const { state } = location;

  return (
    <ul>
      {state.map((result) => (
        <VideosLineWrapper key={result.etag}>
          {result.id.videoId}
        </VideosLineWrapper>
      ))}
    </ul>
  );
};

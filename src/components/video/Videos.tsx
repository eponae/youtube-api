import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchItem } from "../home/home.type";
import { getVideosInformation } from "./video.api";
import { VideoItem } from "./video.type";
import {
  ImgWrapper,
  VideosLineWrapper,
  VideosListWrapper,
  VideoTitleWrapper,
} from "./Videos.style";

const Videos = () => {
  const location: { state: Array<SearchItem> } = useLocation();
  const [videos, setVideos] = useState<Array<VideoItem>>([]);
  const { state } = location;

  // todo : implement cancel request
  useEffect(() => {
    async function fetchVideos() {
      if (state && state.length) {
        const ids = state.map((searchItem) => searchItem.id.videoId);
        const results = await getVideosInformation(ids);
        setVideos(results.items);
      }
    }

    fetchVideos();
  }, [state]);

  return (
    <VideosListWrapper>
      {videos.map((video) => (
        <VideosLineWrapper key={video.id}>
          <Link to={`/home/videos/${video.id}`}>
            <ImgWrapper
              src={video.snippet.thumbnails.default.url}
              width={video.snippet.thumbnails.default.width}
              height={video.snippet.thumbnails.default.height}
            />
            <VideoTitleWrapper>{video.snippet.title}</VideoTitleWrapper>
          </Link>
        </VideosLineWrapper>
      ))}
    </VideosListWrapper>
  );
};

export default Videos;

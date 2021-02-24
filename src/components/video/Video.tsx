import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideoInformation } from "./video.api";
import { VideoWrapper, VideoTitle } from "./Video.style";
import { VideoItemWithPlayer } from "./video.type";

const Video = () => {
  const { videoId }: { videoId: string } = useParams();
  const [video, setVideo] = useState<VideoItemWithPlayer | null>(null);

  useEffect(() => {
    async function fetchVideoInformation() {
      if (videoId) {
        const results = await getVideoInformation(videoId);
        if (results && results.items[0]) {
          setVideo(results.items[0]);
        }
      }
    }
    fetchVideoInformation();
  }, [videoId]);

  if (!video) {
    return null;
  }

  return (
    <VideoWrapper>
      <VideoTitle>{video.snippet.title}</VideoTitle>
      <div dangerouslySetInnerHTML={{ __html: video.player.embedHtml }} />
    </VideoWrapper>
  );
};

export default Video;

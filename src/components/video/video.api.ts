import { funtcher } from "../../apiConfig";
import { VideoItem, VideoItemWithPlayer } from "./video.type";

export function getVideosInformation(
  videoIds: Array<string>
): Promise<{ items: Array<VideoItem> }> {
  return funtcher.get("/videos", { id: videoIds, part: "snippet" });
}

export function getVideoInformation(
  videoId: string
): Promise<{ items: Array<VideoItemWithPlayer> }> {
  return funtcher.get("/videos", { id: videoId, part: "snippet,player" });
}

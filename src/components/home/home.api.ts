import funtch from "funtch";
import { SearchItem } from "./home.type";

export function searchIntoYoutube(
  query: string
): Promise<{ items: Array<SearchItem> }> {
  return funtch.get(
    `https://youtube.googleapis.com/youtube/v3/search?q=${encodeURIComponent(
      query
    )}&type=video&key=${process.env.REACT_APP_API_KEY}`
  );
}

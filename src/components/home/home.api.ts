import { funtcher } from "../../apiConfig";
import { SearchItem } from "./home.type";

export function searchIntoYoutube(
  query: string
): Promise<{ items: Array<SearchItem> }> {
  return funtcher.get(`/search`, {
    q: query,
    type: "video",
  });
}

import funtch from "funtch";

export const funtcher = funtch.withDefault({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  query: { key: process.env.REACT_APP_API_KEY },
});

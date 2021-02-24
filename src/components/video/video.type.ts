export type VideoItem = {
  id: string;
  snippet: {
    title: string;
    thumbnails: { default: { url: string; width: number; height: number } };
  };
};

export type VideoItemWithPlayer = VideoItem & {
  player: {
    embedHtml: string;
  };
};

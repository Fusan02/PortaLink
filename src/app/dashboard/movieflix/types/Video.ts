export type Video = {
  id: string;
  key: string; // YouTube動画ID (embed用URLに使う)
  name: string; // 動画タイトル（例： "Ofiicial Trailer"）
  site: string; // "YouTube" | "Vimeo" など
  type: string; // "Trailer" | "Teaser" | "Clip" など
  official: boolean; // 公式動画かどうか
};

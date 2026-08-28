import { useState } from 'react';
import { fetchMovieVideos } from '../api/movie';

export const useTrailer = () => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isTrailerLoading, setIsTrailerLoading] = useState(false);

  const openTrailer = async (movieId: string) => {
    setIsTrailerLoading(true);
    try {
      const video = await fetchMovieVideos(movieId);
      if (video) {
        setTrailerKey(video.key);
      } else {
        alert('予告動画が見つかりませんでした');
      }
    } catch {
      alert('予告動画の取得に失敗しました');
    } finally {
      setIsTrailerLoading(false);
    }
  };

  const closeTrailer = () => setTrailerKey(null);

  return { trailerKey, isTrailerLoading, openTrailer, closeTrailer };
};

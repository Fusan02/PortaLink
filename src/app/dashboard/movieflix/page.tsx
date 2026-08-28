'use client';

import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './movieflix.css';
import MovieRow from './components/MovieRow/MovieRow';
import type { Movie } from './types';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchMovieVideos, fetchPopularMovies } from './api/movie';
import Loading from './components/Loading/loading';
import TrailerModal from './components/TrailerModal/TrailerModal';

const MovieFlix = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [heroIndex] = useState(() => Math.floor(Math.random() * 20));
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isTrailerLoading, setIsTrailerLoading] = useState(false);

  useEffect(() => {
    // 次の配列内の各処理が終わるまで待つための Promise.
    Promise.all([fetchPopularMovies()])
      .then(([data]) => setMovieList(data as Movie[]))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const handlePlayClick = async () => {
    if (!heroId) return;

    setIsTrailerLoading(true);
    try {
      const video = await fetchMovieVideos(heroId);
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

  if (isLoading) return <Loading />;
  if (isError) return <p>エラーが発生しました</p>;

  const heroMovie =
    movieList.length > 0 ? movieList[heroIndex % movieList.length] : null;
  const heroId = heroMovie?.id;
  const heroTitle = heroMovie?.original_title;
  const heroYear = heroMovie?.release_date;
  const heroOverview = heroMovie?.overview;
  const heroImage = heroMovie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${heroMovie.backdrop_path}`
    : null;

  return (
    <div className={toClassNames([styles.mainWrapper])}>
      <section className={toClassNames([styles.heroSection])}>
        {heroImage && (
          <>
            <Image
              className={toClassNames([styles.heroSectionBg])}
              src={heroImage}
              alt={heroTitle ?? ''}
              width={1920}
              height={1080}
              priority
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
            <div className={toClassNames([styles.heroSectionGradient])} />
          </>
        )}
        <div className={toClassNames([styles.heroSectionContent])}>
          <h1 className={toClassNames([styles.heroSectionTitle])}>
            {heroTitle}
          </h1>
          <div className={toClassNames([styles.heroSectionBadges])}>
            <span className={toClassNames([styles.heroSectionBadge])}>
              {heroYear}
            </span>
          </div>
          {heroOverview && (
            <div className={toClassNames([styles.heroSectionOverview])}>
              {heroOverview}
            </div>
          )}
          <div className={toClassNames([styles.heroSectionActions])}>
            <button
              onClick={handlePlayClick}
              disabled={isTrailerLoading}
              className={toClassNames([
                styles.heroSectionBtn,
                styles.heroSectionBtnPrimary
              ])}
            >
              <span>▶︎</span>
              <span>Play</span>
            </button>
            <Link href={`/dashboard/movieflix/${heroId}`}>
              <button
                className={toClassNames([
                  styles.heroSectionBtn,
                  styles.heroSectionBtnSecondary
                ])}
              >
                More Info
              </button>
            </Link>
          </div>
        </div>
      </section>
      <MovieRow title='人気映画' movies={movieList} />

      {trailerKey && (
        <TrailerModal
          videoKey={trailerKey}
          onClose={() => setTrailerKey(null)}
        />
      )}
    </div>
  );
};

export default MovieFlix;

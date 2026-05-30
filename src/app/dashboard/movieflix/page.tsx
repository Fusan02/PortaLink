'use client';

import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './movieflix.css';
import MovieCard from './components/MovieCard/MovieCard';
import type { Movie } from './types';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from './api/movie';
import Loading from './components/Loading/loading';

let isFirstLoad = true;
// リロード時のローディング画面を表示させるかどうかのトリガー.
let loadingTrigger = true;

export default function MovieFlix() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [heroIndex] = useState(() => Math.floor(Math.random() * 20));

  useEffect(() => {
    if (loadingTrigger) {
      const minDelay = isFirstLoad ? 2000 : 0;
      isFirstLoad = false;

      Promise.all([fetchPopularMovies(), new Promise(resolve => setTimeout(resolve, minDelay))])
        .then(([data]) => setMovieList(data as Movie[]))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    } else {
      fetchPopularMovies()
        .then(setMovieList)
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <p>エラーが発生しました</p>;

  const heroMovie = movieList.length > 0 ? movieList[heroIndex % movieList.length] : null;
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
              style={{ width: '100%', height: 'auto' }}
            />
            <div className={toClassNames([styles.heroSectionGradient])} />
          </>
        )}
        <div className={toClassNames([styles.heroSectionContent])}>
          <h1 className={toClassNames([styles.heroSectionTitle])}>{heroTitle}</h1>
          <div className={toClassNames([styles.heroSectionBadges])}>
            <span className={toClassNames([styles.heroSectionBadge])}>{heroYear}</span>
          </div>
          {heroOverview && (
            <div className={toClassNames([styles.heroSectionOverview])}>{heroOverview}</div>
          )}
          <div className={toClassNames([styles.heroSectionActions])}>
            <button
              onClick={() => alert('未実装です')}
              className={toClassNames([styles.heroSectionBtn, styles.heroSectionBtnPrimary])}
            >
              <span>▶︎</span>
              <span>Play</span>
            </button>
            <Link href={`/dashboard/movieflix/${heroId}`}>
              <button
                className={toClassNames([styles.heroSectionBtn, styles.heroSectionBtnSecondary])}
              >
                More Info
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className={toClassNames([styles.movieRowSection])}>
        <h2 className={toClassNames([styles.movieRowTitle])}>人気映画</h2>
        <div className={toClassNames([styles.movieRowScroll])}>
          {movieList.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

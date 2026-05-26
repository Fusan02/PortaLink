'use client';

import './page.css';
import MovieCard from './components/MovieCard/MovieCard';
import type { Movie, MovieJson } from './types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchPopularMovies(): Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}/movie/popular?language=ja&page=1`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    }
  });
  const data = await res.json();
  return data.results.map((movie: MovieJson) => ({
    id: movie.id,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    overview: movie.overview,
    release_date: movie.release_date
  })) as Movie[];
}

export default function MovieFlix() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [heroIndex] = useState(() => Math.floor(Math.random() * 20));

  useEffect(() => {
    fetchPopularMovies()
      .then(setMovieList)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>読み込み中...</p>;
  if (isError) return <p>エラーが発生しました</p>;

  const heroMovie = movieList.length > 0 ? movieList[heroIndex % movieList.length] : null;
  const heroId = heroMovie?.id;
  const heroTitle = heroMovie?.original_title;
  const heroYear = heroMovie?.release_date;
  const heroOverview = heroMovie?.overview;
  const heroImage = heroMovie?.backdrop_path ? `https://image.tmdb.org/t/p/original${heroMovie.backdrop_path}` : null;

  return (
    <div className='main-wrapper'>
      <section className='hero-section'>
        {heroImage && (
          <>
            <img className='hero-section-bg' src={heroImage} alt={heroTitle} />
            <div className='hero-section-gradient' />
          </>
        )}
        <div className='hero-section-content'>
          <h1 className='hero-section-title'>{heroTitle}</h1>
          <div className='hero-section-badges'>
            <span className='hero-section-badge'>{heroYear}</span>
          </div>
          {heroOverview && <div className='hero-section-overview'>{heroOverview}</div>}
          <div className='hero-section-actions'>
            <button onClick={() => alert('未実装です')} className='hero-section-btn hero-section-btn-primary'>
              <span>▶︎</span>
              <span>Play</span>
            </button>
            <Link href={`/dashboard/movieflix/${heroId}`}>
              <button className='hero-section-btn hero-section-btn-secondary'>More Info</button>
            </Link>
          </div>
        </div>
      </section>
      <section className='movie-row-section'>
        <h2 className='movie-row-title'>人気映画</h2>
        <div className='movie-row-scroll'>
          {movieList.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

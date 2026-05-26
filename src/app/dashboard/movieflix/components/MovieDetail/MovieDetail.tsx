'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import './MovieDetail.css';
import { ArrowLeft, Clock, Star } from 'lucide-react';
import type { MovieDetailJson, Movie } from '../../types';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovieDetail(movieId: string): Promise<Movie> {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?language=ja&append_to_response=credits`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    }
  });
  const data = (await res.json()) as MovieDetailJson;
  return {
    id: data.id,
    original_title: data.title,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
    overview: data.overview,
    release_date: data.release_date,
    year: Number(data.release_date.split('-')[0]),
    rating: data.vote_average,
    runtime: data.runtime,
    voteCount: data.vote_count,
    genres: data.genres.map(genre => genre.name)
  };
}

export default function MovieDetail() {
  const params = useParams();
  const movieId = params?.movieId as string | undefined;

  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetail(movieId)
      .then(setMovie)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) return <p>読み込み中...</p>;
  if (isError) return <p>エラーが発生しました</p>;

  return (
    <div className='movie-detail-root'>
      {movie && (
        <>
          <div
            className='movie-detail-backdrop'
            style={{
              backgroundImage: `url(${'https://image.tmdb.org/t/p/w500' + movie.poster_path})`
            }}
          />
          <div className='movie-detail-backdrop-gradient' />
          <div className='movie-detail-container'>
            <Link href='/dashboard/movieflix' className='movie-detail-backlink'>
              <ArrowLeft className='movie-detail-backlink-icon' />
              Back to home
            </Link>
            <div className='movie-detail-grid'>
              <div className='movie-detail-poster-wrap'>
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title} className='movie-detail-poster-img' />
              </div>
              <div className='movie-detail-details'>
                <h1 className='movie-detail-title'>{movie.original_title}</h1>
                <div className='movie-detail-badges'>
                  <span className='badges-outline'>{movie.year}</span>
                  <span className='badges-outline'>PG-13</span>
                  <span className='badges-outline'>
                    <Clock className='badges-icon-svg' size={14} />
                    {movie.runtime}分
                  </span>
                  <span className='badges-outline'>
                    <Star className='badges-icon-svg badges-star' size={14} />
                    {(movie.rating / 10).toFixed(1)}
                  </span>
                </div>
                <p className='movie-detail-overview'>{movie.overview}</p>
                <div className='movie-detail-genres'>
                  {movie.genres.map(g => (
                    <span key={g} className='badges-genre'>
                      {g}
                    </span>
                  ))}
                </div>
                <div className='movie-detail-actions'>
                  <button onClick={() => alert('未実装です')} className='movie-detail-btn movie-detail-btn-primary'>
                    ▶︎ Watch Now
                  </button>
                  <button onClick={() => alert('未実装です')} className='movie-detail-btn'>
                    + Add to My List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

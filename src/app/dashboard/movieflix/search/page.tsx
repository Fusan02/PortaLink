'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchMoviesByKeyword } from '../api/movie';
import type { Movie } from '../types';
import MovieCard from '../components/MovieCard/MovieCard';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './search.css';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') ?? '';
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    if (!keyword) return;
    fetchMoviesByKeyword(keyword).then(setResults);
  }, [keyword]); // qが変わるたびに再検索

  return (
    <div>
      <div className={toClassNames([styles.movieRowSection])}>
        <h2>「{keyword}」の検索結果</h2>
        <div className={toClassNames([styles.movieRowScroll])}>
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

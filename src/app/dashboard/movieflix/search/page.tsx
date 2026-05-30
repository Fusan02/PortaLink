'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchMoviesByKeyword } from '../api/movie';
import type { Movie } from '../types';
import MovieCard from '../components/MovieCard/MovieCard';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './search.css';
import { Suspense } from 'react';

function SearchContent() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') ?? '';
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    if (!keyword) return;

    // 同じ検索はキャッシュしておき、同じリクエスト送信を防ぐ.
    const cacheKey = `search:${keyword}`;
    const cached = sessionStorage.getItem(cacheKey);

    if (cached) {
      setResults(JSON.parse(cached));
      return;
      // キャッシュがあればGETしない
    }
    fetchMoviesByKeyword(keyword).then(data => {
      sessionStorage.setItem(cacheKey, JSON.stringify(data)); // 保存
      setResults(data);
    });
  }, [keyword]);

  return (
    <div>
      <div className={toClassNames([styles.movieRowSection])}>
        <h2>「{keyword.trim()}」の検索結果</h2>
        <div className={toClassNames([styles.movieRowScroll])}>
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchContent />
    </Suspense>
  );
}

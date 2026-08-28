'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchMoviesByKeyword } from '../api/movie';
import type { Movie } from '../types';
import MovieCard from '../components/MovieCard/MovieCard';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './search.css';
import { Suspense } from 'react';
import Loading from '../components/Loading/loading';

const SearchContent = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') ?? '';
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!keyword) return;

    // 同じ検索はキャッシュしておき、同じリクエスト送信を防ぐ.
    const cacheKey = `search:${keyword}`;
    const cached = sessionStorage.getItem(cacheKey);

    // キャッシュがあればそこから、なければAPIから取得する（setStateは常にコールバック内で行う）.
    const resultsPromise = cached
      ? Promise.resolve(JSON.parse(cached) as Movie[])
      : fetchMoviesByKeyword(keyword).then(data => {
          sessionStorage.setItem(cacheKey, JSON.stringify(data)); // キャッシュを保存
          return data;
        });

    resultsPromise
      .then(data => setResults(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [keyword]);

  if (isLoading) return <Loading />;
  if (isError) return <p>エラーが発生しました</p>;

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
};

const SearchPage = () => {
  return (
    <Suspense fallback={null}>
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;

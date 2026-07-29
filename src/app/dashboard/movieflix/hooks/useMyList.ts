'use client';

import { useCallback, useState } from 'react';
import { Movie } from '../types';
import { createClient } from '@/lib/supabase';
import { fetchMovieDetail } from '../api/movie';

interface UseMyListReturn {
  myList: Movie[];
  loading: boolean;
  error: string | null;
  fetchMyList: () => Promise<void>;
  addToMyList: (
    movieId: string
  ) => Promise<'added' | 'duplicate' | 'error'>;
  removeFromMyList: (
    movieId: string
  ) => Promise<boolean>;
  checkInMyList: (
    movieId: string
  ) => Promise<boolean>;
}

export const useMyList = (): UseMyListReturn => {
  const [myList, setMyList] = useState<Movie[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<
    string | null
  >(null);
  const supabase = createClient();

  const fetchMyList =
    useCallback(async (): Promise<void> => {
      setLoading(true);
      setError(null);

      try {
        const {
          data: { user }
        } = await supabase.auth.getUser();

        if (!user) {
          setError(
            'ユーザーが認証されていません'
          );
          return;
        }

        // Supabase から自分の movie_id リストを取得
        const { data, error: fetchError } =
          await supabase
            .from('movie_list')
            .select('movie_id');

        if (fetchError) {
          setError(fetchError.message);
          return;
        }

        // 各 movie_id を TMDB の詳細取得関数（fetchMovieDetail）に渡す.
        const movies = await Promise.all(
          (data ?? []).map(row =>
            fetchMovieDetail(row.movie_id)
          )
        );

        setMyList(movies);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : '不明なエラー'
        );
      } finally {
        setLoading(false);
      }
    }, [supabase]);

  const addToMyList = useCallback(
    async (
      movieId: string
    ): Promise<
      'added' | 'duplicate' | 'error'
    > => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) {
        setError('ユーザーが認証されていません');
        return 'error';
      }

      const { error: insertError } =
        await supabase.from('movie_list').insert({
          user_id: user.id,
          movie_id: movieId
        });

      if (insertError) {
        if (insertError.code === '23505') {
          return 'duplicate';
        }
        setError(insertError.message);
        return 'error';
      }

      return 'added';
    },
    [supabase]
  );

  const removeFromMyList = useCallback(
    async (movieId: string): Promise<boolean> => {
      const { error: deleteError } =
        await supabase
          .from('movie_list')
          .delete()
          .eq('movie_id', movieId);

      if (deleteError) {
        setError(deleteError.message);
        return false;
      }

      setMyList(prev =>
        prev.filter(movie => movie.id !== movieId)
      );
      return true;
    },
    [supabase]
  );

  const checkInMyList = useCallback(
    async (movieId: string): Promise<boolean> => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) return false;

      const { data, error: fetchError } =
        await supabase
          .from('movie_list')
          .select('movie_id')
          .eq('user_id', user.id)
          .eq('movie_id', movieId)
          .maybeSingle();

      if (fetchError) return false;
      return !!data;
    },
    [supabase]
  );

  return {
    myList,
    loading,
    error,
    fetchMyList,
    addToMyList,
    removeFromMyList,
    checkInMyList
  };
};

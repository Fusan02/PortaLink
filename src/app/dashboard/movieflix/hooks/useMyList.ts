'use client';

import { useCallback, useState, useMemo } from 'react';
import { Movie } from '../types';
import { createClient } from '@/lib/supabase';
import { fetchMovieDetail } from '../api/movie';

interface UseMyListReturn {
    myList: Movie[];
    loading: boolean;
    error: string | null;
    fetchMyList: () => Promise<void>;
    removeFromMyList: (movieId: string) => Promise<boolean>;
}

export const useMyList = (listId: string | null): UseMyListReturn => {
    const [myList, setMyList] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useMemo を使うことで、supabase が毎レンダー新しく作られることを防ぐ.
    const supabase = useMemo(() => createClient(), []);

    const fetchMyList = useCallback(async (): Promise<void> => {
        if (!listId) {
            // リストが未選択（まだ読み込み中 or リストが一つもない）なら、その状態が確定したことを明示的に loading へ反映する.
            setMyList([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        setError(null);

        try {
            // listId と一致するリストに入っている映画を選択する
            const { data, error: fetchError } = await supabase
                .from('list_items')
                .select('movie_id')
                .eq('list_id', listId);

            if (fetchError) {
                setError(fetchError.message);
                return;
            }

            // 各 movie_id を TMDB の詳細取得関数（fetchMovieDetail）に渡す.
            const movies = await Promise.all(
                (data ?? []).map(row => fetchMovieDetail(row.movie_id))
            );

            setMyList(movies);
        } catch (err) {
            setError(err instanceof Error ? err.message : '不明なエラー');
        } finally {
            setLoading(false);
        }
    }, [supabase, listId]);

    const removeFromMyList = useCallback(
        async (movieId: string): Promise<boolean> => {
            if (!listId) return false;

            const { error: deleteError } = await supabase
                .from('list_items')
                .delete()
                .eq('list_id', listId)
                .eq('movie_id', movieId);

            if (deleteError) {
                setError(deleteError.message);
                return false;
            }

            setMyList(prev => prev.filter(movie => movie.id !== movieId));
            return true;
        },
        [supabase, listId]
    );

    return {
        myList,
        loading,
        error,
        fetchMyList,
        removeFromMyList
    };
};

'use client';

import { useCallback, useMemo, useState } from 'react';
import type { List } from '../types';
import { createClient } from '@/lib/supabase';

interface UseListsReturn {
    lists: List[];
    loading: boolean;
    error: string | null;
    fetchLists: () => Promise<void>;
    fetchListIdsContainingMovie: (movieId: string) => Promise<string[]>;
    createList: (
        name: string
    ) => Promise<'created' | 'duplicate' | 'error'>;
    deleteList: (listId: string) => Promise<boolean>;
    addMovieToList: (
        listId: string,
        movieId: string
    ) => Promise<'added' | 'dupulicate' | 'error'>;
    removeMovieFromList: (
        listId: string,
        movieId: string
    ) => Promise<boolean>;
}

export const useLists = (): UseListsReturn => {
    const [lists, setLists] = useState<List[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useMemo を使うことで、supabase が毎レンダー新しく作られることを防ぐ.
    const supabase = useMemo(() => createClient(), []);

    // リストをDBから取得する関数
    const fetchLists = useCallback(async (): Promise<void> => {
        setError(null);

        try {
            const {
                data: { user }
            } = await supabase.auth.getUser();

            if (!user) {
                setError('ユーザーが認証されていません');
                return;
            }

            const { data: listsData, error: listsError } = await supabase
                .from('lists')
                .select('id, name, created_at')
                .eq('user_id', user.id)
                .order('created_at', {
                    ascending: true
                });

            if (listsError) {
                setError(listsError.message);
                return;
            }

            const listIds = (listsData ?? []).map(row => row.id);
            const itemCounts: Record<string, number> = {};

            // リストが1件以上ある時に、中身の件数をまとめて取得する
            if (listIds.length > 0) {
                const { data: itemsData, error: itemsError } =
                    await supabase
                        .from('list_items')
                        .select('list_id')
                        .in('list_id', listIds);

                if (itemsError) {
                    setError(itemsError.message);
                    return;
                }

                itemsData?.forEach(row => {
                    itemCounts[row.list_id] =
                        (itemCounts[row.list_id] ?? 0) + 1;
                });
            }

            setLists(
                (listsData ?? []).map(row => ({
                    id: row.id,
                    name: row.name,
                    createdAt: row.created_at,
                    itemCount: itemCounts[row.id] ?? 0
                }))
            );
        } catch (err) {
            setError(err instanceof Error ? err.message : '不明なエラー');
        } finally {
            setLoading(false);
        }
    }, [supabase]);

    const fetchListIdsContainingMovie = useCallback(
        async (movieId: string): Promise<string[]> => {
            const { data, error: fetchError } = await supabase
                .from('list_items')
                .select('list_id')
                .eq('movie_id', movieId);

            if (fetchError) return [];
            return (data ?? []).map(row => row.list_id);
        },
        [supabase]
    );

    // リストを作成する関数
    const createList = useCallback(
        async (
            name: string
        ): Promise<'created' | 'duplicate' | 'error'> => {
            setError(null);
            setLoading(true);

            try {
                const {
                    data: { user }
                } = await supabase.auth.getUser();

                if (!user) {
                    setError('ユーザーが認証されていません');
                    return 'error';
                }

                const { error: insertError } = await supabase
                    .from('lists')
                    .insert({ user_id: user.id, name });

                if (insertError) {
                    if (insertError.code === '23505') return 'duplicate';
                    setError(insertError.message);
                    return 'error';
                }

                await fetchLists();
                return 'created';
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : '不明なエラー'
                );
                return 'error';
            } finally {
                setLoading(false);
            }
        },
        [supabase, fetchLists]
    );

    // リストを削除する関数
    const deleteList = useCallback(
        async (listId: string): Promise<boolean> => {
            const { error: deleteError } = await supabase
                .from('lists')
                .delete()
                .eq('id', listId);

            if (deleteError) {
                setError(deleteError.message);
                return false;
            }

            setLists(prev => prev.filter(l => l.id !== listId));
            return true;
        },
        [supabase]
    );

    const addMovieToList = useCallback(
        async (
            listId: string,
            movieId: string
        ): Promise<'added' | 'dupulicate' | 'error'> => {
            const { error: insertError } = await supabase
                .from('list_items')
                .insert({ list_id: listId, movie_id: movieId });

            if (insertError) {
                if (insertError.code === '23505') return 'dupulicate';
                setError(insertError.message);
                return 'error';
            }
            return 'added';
        },
        [supabase]
    );

    const removeMovieFromList = useCallback(
        async (listId: string, movieId: string): Promise<boolean> => {
            const { error: deleteError } = await supabase
                .from('list_items')
                .delete()
                .eq('list_id', listId)
                .eq('movie_id', movieId);

            if (deleteError) {
                setError(deleteError.message);
                return false;
            }
            return true;
        },
        [supabase]
    );

    return {
        lists,
        loading,
        error,
        fetchLists,
        fetchListIdsContainingMovie,
        createList,
        deleteList,
        addMovieToList,
        removeMovieFromList
    };
};

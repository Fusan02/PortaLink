'use client';

import { useCallback, useState } from 'react';
import type { List } from '../types';
import { createClient } from '@/lib/supabase';

interface UseListsReturn {
  lists: List[];
  loading: boolean;
  error: string | null;
  fetchLists: () => Promise<void>;
  createList: (name: string) => Promise<boolean>;
  deleteList: (
    listId: string
  ) => Promise<boolean>;
}

export const useLists = (): UseListsReturn => {
  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<
    string | null
  >(null);
  const supabase = createClient();

  const fetchLists =
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

        const { data, error: fetchError } =
          await supabase
            .from('lists')
            .select('id, name, created_at')
            .eq('user_id', user.id)
            .order('created_at', {
              ascending: true
            });

        if (fetchError) {
          setError(fetchError.message);
          return;
        }

        setLists(
          (data ?? []).map(row => ({
            id: row.id,
            name: row.name,
            createdAt: row.created_at
          }))
        );
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

  const createList = useCallback(
    async (name: string): Promise<boolean> => {}
  );
};

'use client';

import { useState } from 'react';
import { Session, SessionInput } from '../types';
import { createClient } from '@/lib/supabase';

interface UseSessionReturn {
    sessions: Session[];
    loading: boolean;
    error: string | null;
    createSession: (input: SessionInput) => Promise<boolean>;
    fetchSessions: (limit?: number) => Promise<void>;
    fetchSessionsByDateRange: (startDate: Date, endDate: Date) => Promise<void>;
    deleteSession: (id: string) => Promise<boolean>;
}

export const useSession = (): UseSessionReturn => {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const supabase = createClient();

    // セッションを作成
    const createSession = async (input: SessionInput): Promise<boolean> => {
        setLoading(true);
        setError(null);

        try {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                setError('ユーザーが認証されていません');
                return false;
            }

            const now = new Date();
            const startTime = new Date(now.getTime() - input.duration * 1000);

            const { error: inserError } = await supabase
                .from('sessions')
                .insert({
                    user_id: user.id,
                    start_time: startTime.toISOString(),
                    end_time: now.toISOString(),
                    duration: input.duration,
                    memo: input.memo,
                    tag: input.tag,
                    ai_comment: '',
                });
            
            if (inserError) {
                setError(inserError.message);
                return false;
            }

            // 作成後、セッション一覧を取得
            await fetchSessions();
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : '不明なエラー');
            return false;
        } finally {
            setLoading(false);
        }
    };

    // セッション一覧を取得
    const fetchSessions = async (limit: number = 50): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const { data: { user } } = await supabase.auth.getUser();
            
            if (!user) {
                setError('ユーザーが認証されていません');
                return;
            }

            const { data, error: fetchError} = await supabase
                .from('sessions')
                .select('*')
                .eq('user_id', user.id)
                .order('start_time', { ascending: false })
                .limit(limit);

            if (fetchError) {
                setError(fetchError.message);
                return;
            }

            // データを型変換
            const formattedSessions: Session[] = (data || []).map((row) => ({
                id: row.id,
                startTime: new Date(row.start_time),
                endTime: new Date(row.end_time),
                duration: row.duration,
                memo: row.memo,
                tag: row.tag,
                aiComment: row.ai_comment,
            }));

            setSessions(formattedSessions);
        } catch (err) {
            setError(err instanceof Error ? err.message : '不明なエラー');
        } finally {
            setLoading(false);
        }
    };

    // 日付範囲でセッションを取得
    const fetchSessionsByDateRange = async (
        startDate: Date,
        endDate: Date,
    ): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const { data: { user }} = await supabase.auth.getUser();

            if (!user) {
                setError('ユーザーが認証されていません');
                return;
            }

            const { data, error: fetchError } = await supabase
                .from('sessions')
                .select('*')
                .eq('user_id', user.id)
                .gte('start_time', startDate.toISOString())
                .lte('start_time', endDate.toISOString())
                .order('start_time', { ascending: false });

            if(fetchError) {
                setError(fetchError.message);
                return;
            }

            const formattedSessions: Session[] = (data || []).map((row) => ({
                id: row.id,
                startTime: new Date(row.start_time),
                endTime: new Date(row.end_time),
                duration: row.duration,
                memo: row.memo,
                tag: row.tag,
                aiComment: row.ai_comment,
            }));
            
            setSessions(formattedSessions);
        } catch (err) {
            setError(err instanceof Error ? err.message : '不明なエラー');
        } finally {
            setLoading(false);
        }
    };

    // セッションを削除
    const deleteSession = async (id: string): Promise<boolean> => {
        setLoading(true);
        setError(null);

        try {
            const { error: deleteError } = await supabase
                .from('sessions')
                .delete()
                .eq('id', id);

            if (deleteError) {
                setError(deleteError.message);
                return false;
            }

            // 削除後、セッション一覧を再取得
            await fetchSessions();
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : '不明なエラー');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        sessions,
        loading,
        error,
        createSession,
        fetchSessions,
        fetchSessionsByDateRange,
        deleteSession,
    };
};
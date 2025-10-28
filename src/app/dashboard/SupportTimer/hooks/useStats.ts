'use client';

import { useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase';
import type { Stats, WeeklyStats, DailyStats } from '../types';

interface UseStatsReturn {
    stats: Stats | null;
    loading: boolean;
    error: string | null;
    fetchWeeklyStats: () => Promise<void>;
    calculateStreak: () => Promise<number>;
}

export const useStats = (): UseStatsReturn => {
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const supabase = createClient();

    // 連続日数を計算
    const calculateStreak = useCallback(async (): Promise<number> => {
        try {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) return 0;

            // 過去60日分のセッションを取得
            const sixtyDaysAgo = new Date();
            sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

            const { data: sessionData } = await supabase
                .from('sessions')
                .select('start_time')
                .eq('user_id', user.id)
                .gte('start_time', sixtyDaysAgo.toISOString())
                .order('start_time', { ascending: false });

            if (!sessionData || sessionData.length === 0) return 0;

            // 日付ごとにユニークな日付を取得
            const uniqueDates = new Set(
                sessionData.map((session) =>
                    new Date(session.start_time).toISOString().split('T')[0]
                )
            );

            // 今日から遡って連続している日数をカウント
            let streak = 0;
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            for (let i = 0; i < 60; i++) {
                const checkDate = new Date(today);
                checkDate.setDate(today.getDate() - i);
                const dateStr = checkDate.toISOString().split('T')[0];

                if (uniqueDates.has(dateStr)) {
                    streak++;
                } else {
                // 連続が途切れた
                    break;
                }
            }

            return streak;
        } catch (err) {
            console.error('連続日数の計算エラー:', err);
            return 0;
        }
    }, [supabase]);

    // 週間統計を取得
    const fetchWeeklyStats = useCallback(async (): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                setError('ユーザーが認証されていません');
                return;
            }

            // 今週の日曜日〜土曜日を計算
            const now = new Date();
            const dayOfWeek = now.getDay(); // 0=日曜, 6=土曜
            const startOfWeek = new Date(now);
            startOfWeek.setDate(now.getDate() - dayOfWeek);
            startOfWeek.setHours(0, 0, 0, 0);

            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            endOfWeek.setHours(23, 59, 59, 999);

            // 今週のセッションを取得
            const { data: sessionData, error: fetchError } = await supabase
                .from('sessions')
                .select('*')
                .eq('user_id', user.id)
                .gte('start_time', startOfWeek.toISOString())
                .lte('start_time', endOfWeek.toISOString());

            if (fetchError) {
                setError(fetchError.message);
                return;
            }

            // 日付ごとに集計
            const dailyMap = new Map<string, DailyStats>();

            // 7日分のデータを初期化
            for (let i = 0; i < 7; i++) {
                const date = new Date(startOfWeek);
                date.setDate(startOfWeek.getDate() + i);
                const dateStr = date.toISOString().split('T')[0];

                dailyMap.set(dateStr, {
                    date: dateStr,
                    totalMinutes: 0,
                    sessionCount: 0,
                });
            }

            // セッションデータを集計
            let weekTotalMinutes = 0;
            (sessionData || []).forEach((session) => {
                const date = new Date(session.start_time).toISOString().split('T')[0];
                const minutes = Math.floor(session.duration / 60);

                const dayStats = dailyMap.get(date);
                if (dayStats) {
                    dayStats.totalMinutes += minutes;
                    dayStats.sessionCount += 1;
                }

                weekTotalMinutes += minutes;
            });

            // 週間統計の配列を作成
            const days: DailyStats[] = [];
            for (let i = 0; i < 7; i++) {
                const date = new Date(startOfWeek);
                date.setDate(startOfWeek.getDate() + i);
                const dateStr = date.toISOString().split('T')[0];
                const dayStats = dailyMap.get(dateStr)!;
                days.push(dayStats);
            }

            // 最高記録を取得
            const bestDay = days.reduce((max, day) =>
                day.totalMinutes > max.totalMinutes ? day : max
            , days[0]);

            // 連続日数を計算
            const streak = await calculateStreak();

            // 全期間統計を取得
            const { data: allSessionData } = await supabase
                .from('sessions')
                .select('duration')
                .eq('user_id', user.id);

            const allTimeTotalMinutes = (allSessionData || []).reduce(
                (sum, session) => sum + Math.floor(session.duration / 60),
                0
            );

            const allTimeTotalSessions = allSessionData?.length || 0;

            // 過去最高連続日数（簡易版: 現在の連続日数と同じ）
            const bestStreak = streak;

            const weeklyStats: WeeklyStats = {
                days,
                totalMinutes: weekTotalMinutes,
                streak,
                bestDay: {
                    date: bestDay.date,
                    minutes: bestDay.totalMinutes,
                },
            };

            const statsData: Stats = {
                weekly: weeklyStats,
                allTime: {
                    totalMinutes: allTimeTotalMinutes,
                    totalSessions: allTimeTotalSessions,
                    bestStreak,
                },
            };

            setStats(statsData);
        } catch (err) {
            setError(err instanceof Error ? err.message : '不明なエラー');
        } finally {
            setLoading(false);
        }
    }, [supabase, calculateStreak]);

    return {
        stats,
        loading,
        error,
        fetchWeeklyStats,
        calculateStreak,
    };
};
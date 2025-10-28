'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase';
import type { Settings } from '../types';
import { DEFAULT_SETTINGS, DEFAULT_TAG_COLOR } from '../types';


interface UseSettingsReturn {
    settings: Settings;
    loading: boolean;
    error: string | null;
    fetchSettings: () => Promise<void>;
    saveSettings: (newSettings: Settings) => Promise<boolean>;
    updateTagColor: (tagName: string, color: string) => Promise<boolean>;
    getTagColor: (tagName?: string) => string;
}

export const useSettings = (): UseSettingsReturn => {
    const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const supabase = createClient();

    // 設定を保存
    const saveSettings = useCallback(async (newSettings: Settings): Promise<boolean> => {
        setLoading(true);
        setError(null);

        try {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                setError('ユーザーが認証されていません');
                return false;
            }

            // upsert（存在すれば更新、なければ挿入）
            const { error: upsertError } = await supabase
                .from('user_settings')
                .upsert({
                    user_id: user.id,
                    ai_tone: newSettings.aiTone,
                    daily_goal_minutes: newSettings.dailyGoalMinutes,
                    notification_start_time: newSettings.notificationStartTime,
                    notification_end_time: newSettings.notificationEndTime,
                    tag_colors: newSettings.tagColors,
                }, {
                    onConflict: 'user_id',
                });

            if (upsertError) {
                setError(upsertError.message);
                return false;
            }

            // 保存成功後、stateを更新
            setSettings(newSettings);
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : '不明なエラー');
            return false;
        } finally {
            setLoading(false);
        }
    }, [supabase]);

    // 設定を取得
    const fetchSettings = useCallback(async (): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                setError('ユーザーが認証されていません');
                setSettings(DEFAULT_SETTINGS);
                return;
            }

            const { data, error: fetchError } = await supabase
                .from('user_settings')
                .select('*')
                .eq('user_id', user.id)
                .single();

            if (fetchError) {
                // データが存在しない場合はデフォルト設定を使用
                if (fetchError.code === 'PGRST116') {
                    setSettings(DEFAULT_SETTINGS);
                    // 初回時はデフォルト設定を保存
                    await saveSettings(DEFAULT_SETTINGS);
                } else {
                    setError(fetchError.message);
                }
                return;
            }

            // データをSettings型に変換
            const loadedSettings: Settings = {
                aiTone: data.ai_tone,
                dailyGoalMinutes: data.daily_goal_minutes,
                notificationStartTime: data.notification_start_time,
                notificationEndTime: data.notification_end_time,
                tagColors: data.tag_colors || DEFAULT_SETTINGS.tagColors,
            };

            setSettings(loadedSettings);
        } catch (err) {
            setError(err instanceof Error ? err.message : '不明なエラー');
            setSettings(DEFAULT_SETTINGS);
        } finally {
            setLoading(false);
        }
    }, [supabase, saveSettings]);

    const getTagColor = useCallback((tagName?: string): string => {
        if (!tagName) return DEFAULT_TAG_COLOR;
        return settings.tagColors[tagName] || DEFAULT_TAG_COLOR;
    }, [settings.tagColors]);

    const updateTagColor = useCallback(async (
        tagName: string,
        color: string,
    ): Promise<boolean> => {
        const newSettings: Settings = {
            ...settings,
            tagColors: {
                ...settings.tagColors,
                [tagName]: color,
            },
        };
        return await saveSettings(newSettings);
    }, [settings, saveSettings]);

    // 初回マウント時に設定を取得
    useEffect(() => {
        fetchSettings();
    }, [fetchSettings]);

    return {
        settings,
        loading,
        error,
        fetchSettings,
        saveSettings,
        getTagColor,
        updateTagColor,        
    };
};
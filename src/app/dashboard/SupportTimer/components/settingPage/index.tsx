'use client';

import { useState } from 'react';
import type { Settings } from '../../types';
// import ToneSelector from './ToneSelector';
import GoalInput from './GoalInput';
// import NotificationSelector from './NotificationSelector';
import index from '../../styles/settingPage/index.css';
import { useSettings } from '../../hooks/useSettings';
import TagColorEditor from './TagColorEditor';

const SettingsPage = () => {
    const { settings, loading, error, saveSettings } = useSettings();

    // settings がフェッチ／保存で新しくなったら localSettings をリセットする
    // （useEffect ではなくレンダー中に検知することで余分な再レンダーを避ける）
    const [prevSettings, setPrevSettings] = useState(settings);
    const [localSettings, setLocalSettings] = useState<Settings>(settings);
    if (settings !== prevSettings) {
        setPrevSettings(settings);
        setLocalSettings(settings);
    }

    const [showToast, setShowToast] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    {/*
    const handleToneChange = (tone: AITone) => {
        setLocalSettings((prev) => ({ ...prev, aiTone: tone }));
    };
    */}

    const handleGoalChange = (minutes: number) => {
        setLocalSettings((prev) => ({ ...prev, dailyGoalMinutes: minutes }));
    };

    {/* 
    const handleNotificationChange = (startTime: string, endTime: string) => {
        setSettings((prev) => ({
            ...prev,
            notificationStartTime: startTime,
            notificationEndTime: endTime,
        }));
    };
    */}

    const handleSave = async () => {
        setIsSaving(true);

        const success = await saveSettings(localSettings);

        if (success) {
            // トースト表示
            setShowToast(true);
            window.setTimeout(() => {
                setShowToast(false);
            }, 3000);
        } else {
            // エラー表示
            alert('設定の保存に失敗しました');
        }
        setIsSaving(false);
    };

    const handleTagColorChange = (tagName: string, color: string) => {
        setLocalSettings((prev) => ({
            ...prev,
            tagColors: {
                ...prev.tagColors,
                [tagName]: color,
            },
        }));
    };

    // ローディング中
    if (loading) {
        return (
            <div className={index.loadingContainer}>
                <div className={index.loading}>
                    読み込み中...
                </div>
            </div>
        );
    }

    // エラー時
    if (error) {
        return (
            <div className={index.errorContainer}>
                <div className={index.error}>
                    ⚠️ {error}
                </div>
            </div>
        );
    }

    return (
        <div className={index.page}>
            <h1 className={index.h1}>
                ⚙️ 設定
            </h1>

            <div className={index.container}>
                {/* AIのトーン設定 */}
                {/* 
                    <ToneSelector
                    selectedTone={localSettings.aiTone}
                    onToneChange={handleToneChange}
                />
                */}

                {/* 1日の目標時間 */}
                <GoalInput
                    goalMinutes={localSettings.dailyGoalMinutes}
                    onGoalChange={handleGoalChange}
                />

                {/* タグ色設定 */}
                <TagColorEditor
                    tagColors={localSettings.tagColors}
                    onColorChange={handleTagColorChange}
                />

                {/* 通知時間帯 */}
                {/* 通知機能は未実装
                <NotificationSelector
                    startTime={settings.notificationStartTime}
                    endTime={settings.notificationEndTime}
                    onNotificationChange={handleNotificationChange}
                />
                */}

                {/* 保存ボタン */}
                <button
                    onClick={handleSave}
                    className={index.button}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    {isSaving ? '保存中...' : '💾 保存'}
                </button>
            </div>

            {/* トースト通知 */}
            {showToast && (
                <div className={index.toast}>
                    ✅ 設定を更新しました
                </div>
            )}
        </div>
    );
};

export default SettingsPage;
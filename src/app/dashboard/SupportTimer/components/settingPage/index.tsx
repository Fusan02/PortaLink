'use client';

import { useState } from 'react';
import type { Settings, AITone } from '../../types';
import { DEFAULT_SETTINGS } from '../../types';
import ToneSelector from './ToneSelector';
import GoalInput from './GoalInput';
// import NotificationSelector from './NotificationSelector';
import index from '../../styles/settingPage/index.css';

const SettingsPage = () => {
    const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
    const [showToast, setShowToast] = useState(false);

    const handleToneChange = (tone: AITone) => {
        setSettings((prev) => ({ ...prev, aiTone: tone }));
    };

    const handleGoalChange = (minutes: number) => {
        setSettings((prev) => ({ ...prev, dailyGoalMinutes: minutes }));
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

    const handleSave = () => {
        // 後でSupabaseに保存
        console.log('設定を保存:', settings);

        // トースト表示
        setShowToast(true);
        window.setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <div className={index.page}>
            <h1 className={index.h1}>
                ⚙️ 設定
            </h1>

            <div className={index.container}>
                {/* AIのトーン設定 */}
                <ToneSelector
                    selectedTone={settings.aiTone}
                    onToneChange={handleToneChange}
                />

                {/* 1日の目標時間 */}
                <GoalInput
                    goalMinutes={settings.dailyGoalMinutes}
                    onGoalChange={handleGoalChange}
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
                    💾 保存
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
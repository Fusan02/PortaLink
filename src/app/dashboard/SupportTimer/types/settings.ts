// ユーザー設定の型定義

// メッセージのトーンの種類
export type AITone = 'gentle' | 'normal' | 'energetic';

// ユーザー設定情報
export interface Settings {
    aiTone: AITone;
    dailyGoalMinutes: number;
    notificationStartTime: string;
    notificationEndTime: string;
}

// 初期設定値
export const DEFAULT_SETTINGS: Settings = {
    aiTone: 'normal',
    dailyGoalMinutes: 60,
    notificationStartTime: '08:00',
    notificationEndTime: '10:00',
};

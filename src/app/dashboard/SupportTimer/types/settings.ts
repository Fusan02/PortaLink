// ユーザー設定の型定義

// メッセージのトーンの種類
export type AITone = 'gentle' | 'normal' | 'energetic';

// タグの色設定の型
export interface TagColorSettings {
      [tagName: string]: string;  // タグ名: カラーコード
}

// ユーザー設定情報
export interface Settings {
    aiTone: AITone;
    dailyGoalMinutes: number;
    notificationStartTime: string;
    notificationEndTime: string;
    tagColors: TagColorSettings;
}

// 初期設定値
export const DEFAULT_SETTINGS: Settings = {
    aiTone: 'normal',
    dailyGoalMinutes: 60,
    notificationStartTime: '08:00',
    notificationEndTime: '10:00',
    tagColors: {  // 新規追加
        '開発': '#2196F3',
        '学習': '#4CAF50',
    },
};

// デフォルトカラー
export const DEFAULT_TAG_COLOR = '#757575';

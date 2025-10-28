// 統計データの型定義

// 1日分の統計
export interface DailyStats {
    date: string;
    totalMinutes: number;
    sessionCount: number;
}

// 1週間分の統計
export interface WeeklyStats {
    days: DailyStats[];
    totalMinutes: number;
    streak: number;
    bestDay: {
        date: string;
        minutes: number;
    };
}

// 全統計データ
export interface Stats {
    weekly: WeeklyStats;
    allTime: {
        totalMinutes: number;
        totalSessions: number;
        bestStreak: number;
    };
}
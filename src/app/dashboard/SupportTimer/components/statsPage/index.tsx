'use client';

import { useEffect } from 'react';
import { useStats } from '../../hooks/useStats';
import { useSettings } from '../../hooks/useSettings';
import statsPage from '../../styles/statsPage/statsPage.css';
import DailyBarChart from './DailyBarChart';
import StreakBadge from './StreakBadge';
import SummaryCard from './SummaryCard';
import GoalProgress from '../common/GoalProgress';


const StatsPage = () => {
    const { stats, loading, error, fetchWeeklyStats} = useStats();
    const { settings } = useSettings();

    // 初回マウント次に統計を取得
    useEffect(() => {
        fetchWeeklyStats();
    }, [fetchWeeklyStats]);

    const formatTime = (minutes: number): string => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}時間${mins}分`;
    };

    // ローディング中
    if (loading) {
        return (
            <div className={statsPage.loadingContainer}>
                <div className={statsPage.loading}>
                    読み込み中...
                </div>
            </div>
        );
    }

    // エラー時
    if (error) {
        return (
            <div className={statsPage.errorContainer}>
                <div className={statsPage.error}>
                    ⚠️{error}
                </div>
            </div>
        );
    }
    

    // データがない場合
    if (!stats) {
        return (
            <div className={statsPage.nonStatsContainer}>
                <div className={statsPage.nonStats}>
                    データがありません
                </div>
            </div>
        );
    }

    // 棒グラフ用のデータを変換
    const chartData = stats.weekly.days.map((day, index) => ({
        day: ['日', '月', '火', '水', '木', '金', '土'][index],
        minutes: day.totalMinutes,
    }));

    // 今日の作業時間を計算
    const now = new Date();
    const todayDateStr = now.toISOString().split('T')[0];

    // 今日のデータを日付文字列で検索
    const todayData = stats.weekly.days.find(day => day.date === todayDateStr);
    const todayMinutes = todayData?.totalMinutes || 0;

    return (
        <div className={statsPage.page}>
            <h1 className={statsPage.h1}>
                📊 今週の記録
            </h1>

            {/* 目標達成状況 */}
            <GoalProgress
                currentMinutes={todayMinutes}
                goalMinutes={settings.dailyGoalMinutes}
                showAchievementBanner={true}
            />

            {/* 棒グラフ */}
            <DailyBarChart data={chartData} />

            {/* 連続記録バッジ */}
            {stats.weekly.streak > 0 &&
                <StreakBadge streak={stats.weekly.streak} />
            }

            {/* サマリーカード */}
            <div className={statsPage.summaryCard}>
                <SummaryCard 
                    icon='📊'
                    label='今週の合計作業時間'
                    value={formatTime(stats.weekly.totalMinutes)}
                />
                <SummaryCard 
                    icon='🎖'
                    label='今週の最高記録'
                    value={formatTime(stats.weekly.bestDay.minutes)}
                />
                <SummaryCard 
                    icon='⏱'
                    label='累積作業時間'
                    value={formatTime(stats.allTime.totalMinutes)}
                />
                <SummaryCard 
                    icon='📈'
                    label='累積セッション数'
                    value={`${stats.allTime.totalSessions}回`}
                />
            </div>
        </div>
    );
};

export default StatsPage;
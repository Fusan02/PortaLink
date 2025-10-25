'use client';

import statsPage from '../../styles/statsPage/statsPage.css';
import DailyBarChart from './DailyBarChart';
import StreakBadge from './StreakBadge';
import SummaryCard from './SummaryCard';


const StatsPage = () => {
    // 仮データ (後でSupabaseから取得)
    const weeklyData = [
        { day: '日', minutes: 0 },
        { day: '月', minutes: 45 },
        { day: '火', minutes: 60 },
        { day: '水', minutes: 75 },
        { day: '木', minutes: 90 },
        { day: '金', minutes: 120 },
        { day: '土', minutes: 80 },
    ];

    const streak = 7; // 連続日数
    const totalMinutes = 470; // 合計作業時間 (分)
    const bestMinutes = 150; // 過去最高 (分)

    const formatTime = (minutes: number): string => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}時間${mins}分`;
    };
    
    return (
        <div className={statsPage.page}>
            <h1 className={statsPage.h1}>
                📊 今週の記録
            </h1>

            {/* 棒グラフ */}
            <DailyBarChart data={weeklyData} />

            {/* 連続記録バッジ */}
            <StreakBadge streak={streak} />

            {/* サマリーカード */}
            <div className={statsPage.summaryCard}>
                <SummaryCard 
                    icon='📊'
                    label='合計作業時間'
                    value={formatTime(totalMinutes)}
                />
                <SummaryCard 
                    icon='🎖'
                    label='過去最高'
                    value={formatTime(bestMinutes)}
                />
            </div>
        </div>
    );
};

export default StatsPage;
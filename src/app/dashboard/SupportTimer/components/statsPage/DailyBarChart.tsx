'use client';

import dailyBarChart from '../../styles/statsPage/dailyBarChart.css';

interface DailyBarChartProps {
    data: Array<{
        day: string;
        minutes: number;
    }>;
}

const DailyBarChart = ({ data }: DailyBarChartProps) => {
    // 最大値を取得してグラフの高さを正規化
    const maxMinutes = Math.max(...data.map((d) => d.minutes), 1); // 0の除算を防ぐため配列の最後に1を追加
    const maxHeight = 150; // バーの最大高さ

    return (
        <div className={dailyBarChart.page}>
            <div className={dailyBarChart.container}>
                {data.map((item) => {
                    const heightPx = (item.minutes / maxMinutes) * maxHeight;
                    const hasData = item.minutes > 0;

                    return (
                        <div
                            key={item.day}
                            className={dailyBarChart.itemDay}
                        >
                            {/* 時間表示 */}
                            <div className={dailyBarChart.time}>
                                {item.minutes}分
                            </div>

                            {/* バー */}
                            <div
                                className={dailyBarChart.bar({ hasData })}
                                style={{ 
                                    height: hasData ?  `${heightPx}px` : '0px',
                                }}
                            />

                            {/* 曜日ラベル */}
                            <div className={dailyBarChart.day}>
                                {item.day}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DailyBarChart;
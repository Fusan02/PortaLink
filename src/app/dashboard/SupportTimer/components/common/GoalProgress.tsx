'use client';

import goalProgress from '../../styles/common/goalProgress.css';

interface GoalProgressProps {
    currentMinutes: number;
    goalMinutes: number;
    showAchievementBanner?: boolean;
}

const GoalProgress = ({
    currentMinutes,
    goalMinutes,
    showAchievementBanner = true
}: GoalProgressProps) => {
    const progress = Math.min((currentMinutes / goalMinutes) * 100, 100);
    const isGoalAchieved = currentMinutes >= goalMinutes;

    return (
        <div className={goalProgress.container}>
            <div className={goalProgress.header}>
                🎯 今日の目標達成状況
            </div>

            {isGoalAchieved && showAchievementBanner && (
                <div className={goalProgress.achievementBanner}>
                    🎉 本日の目標達成！おめでとうございます！
                </div>
            )}

            <div className={goalProgress.stats}>
                <span className={goalProgress.current}>{currentMinutes}分</span>
                <span className={goalProgress.separator}>/</span>
                <span className={goalProgress.target}>{goalMinutes}分</span>
            </div>

            <div className={goalProgress.progressBarContainer}>
                <div
                    className={goalProgress.progressBarFill}
                    style={{
                        width: `${progress}%`,
                        backgroundColor: isGoalAchieved ? '#4CAF50' : '#2196F3'
                    }}
                />
            </div>

            <div className={goalProgress.progressPercent}>
                {Math.round(progress)}% 達成
            </div>
        </div>
    );
};

export default GoalProgress;

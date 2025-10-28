'use client';

import streakBadge from '../../styles/statsPage/streakBadge.css';

interface StreakBadgeProps {
    streak: number;
}

const StreakBadge = ({ streak }: StreakBadgeProps) => {
    return (
        <div className={streakBadge.page}>
            <div className={streakBadge.badge}>
                🔥
            </div>
            <div className={streakBadge.streak}>
                連続記録: {streak}日目！
            </div>
            <div className={streakBadge.message}>
                その調子で続けよう！
            </div>
        </div>
    );
};

export default StreakBadge;
'use client';

import bigTimer from '../../styles/homePage/bigTimer.css';

interface BigTimerProps {
    seconds: number;
    isRunning: boolean;
}

const BigTimer = ({ seconds }: BigTimerProps) => {
    // 秒を HH:MM:SSに変換
    const formatTime = (totalSeconds: number): string => {
        const hours = Math.floor(totalSeconds / 3600);
        const minute = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className={bigTimer.container}>
            <div className={bigTimer.timer}>
                {formatTime(seconds)}
            </div>
        </div>
    );
};

export default BigTimer;
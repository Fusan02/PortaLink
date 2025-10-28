'use client';

import { useState } from 'react';
import { useTimer } from '../../hooks/useTimer';
import MotivationCard from './MotivationCard';
import BigTimer from './BigTimer';
import FinishDialog from './FinishDialog';
import index from '../../styles/homePage/index.css';

const HomePage = () => {
    const { seconds, isRunning, start, stop, reset } = useTimer();
    const [showFinishDialog, setShowFinishDialog] = useState(false);

    const handleStart = () => {
        start();
    };

    const handleStop = () => {
        stop();
        setShowFinishDialog(true);
    };

    const handleSaveSession = (memo: string, tag?: string) => {
        // セッション保存処理は後ほど
        console.log('保存:', { duration: seconds, memo: memo, tag: tag });
        setShowFinishDialog(false);
        reset();
    };

    const handleCancel = () => {
        setShowFinishDialog(false);
        reset();
    };

    return (
        <div className={index.container}>
            {/* AIのひとこと予定 */}
            <MotivationCard />

            {/* タイマー表示 */}
            <BigTimer seconds={seconds} isRunning={isRunning} />

            {/* Start/Stopボタン */}
            <div className={index.startStopContainer}>
                {!isRunning ? (
                    <button
                        onClick={handleStart}
                        className={index.startButton}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        ▶︎ Start
                    </button>
                ) : (
                    <button
                        onClick={handleStop}
                        className={index.stopButton}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        ◽️ Stop
                    </button>
                )}
            </div>

            {/* 終了後のダイアログ */}
            {showFinishDialog && (
                <FinishDialog
                    duration={seconds}
                    onSave={handleSaveSession}
                    onClose={handleCancel}
                />
            )}
        </div>
    );
};

export default HomePage;
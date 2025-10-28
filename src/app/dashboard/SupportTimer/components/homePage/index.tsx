'use client';

import { useState } from 'react';
import { useTimer } from '../../hooks/useTimer';
import MotivationCard from './MotivationCard';
import BigTimer from './BigTimer';
import FinishDialog from './FinishDialog';
import index from '../../styles/homePage/index.css';
import { useSession } from '../../hooks/useSession';

const HomePage = () => {
    const { seconds, isRunning, start, stop, reset } = useTimer();
    const { createSession, loading: sessionLoading } = useSession();
    const [showFinishDialog, setShowFinishDialog] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);

    const handleStart = () => {
        start();
    };

    const handleStop = () => {
        stop();
        setShowFinishDialog(true);
    };

    const handleSaveSession = async (memo: string, tag?: string) => {
        setSaveError(null);

        // Supabaseに保存
        const success = await createSession({
            duration: seconds,
            memo,
            tag,
        });

        if (success) {
            // 保存成功
            setShowFinishDialog(false);
            reset();
        } else {
            // 保存失敗
            setSaveError('セッションの保存に失敗しました。もう一度お試しください。');
        }
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
                    loading={sessionLoading}
                    error={saveError}
                />
            )}
        </div>
    );
};

export default HomePage;
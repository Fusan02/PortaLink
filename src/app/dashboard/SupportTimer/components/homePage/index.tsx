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
        <>
            <div className={index.description}>
                <h2 className={index.descriptionTitle}>SupportTimerへようこそ</h2>

                <section className={index.descriptionSection}>
                    <h3 className={index.descriptionSectionTitle}>タイマーの使い方</h3>
                    <p className={index.descriptionText}>「▶︎ Start」ボタンを押すと作業時間の計測が開始されます。作業が終わったら「◽️ Stop」ボタンを押してください。メモやタグを追加して記録を保存できます。</p>
                </section>

                <section className={index.descriptionSection}>
                    <h3 className={index.descriptionSectionTitle}>各ページについて</h3>
                    <ul className={index.descriptionList}>
                        <li className={index.descriptionListItem}><strong>Stats:</strong> 作業時間の統計データを確認できます。日別、週別、月別の作業時間や傾向を分析できます。</li>
                        <li className={index.descriptionListItem}><strong>History:</strong> 過去の作業記録を一覧で確認できます。メモやタグで検索・フィルタリングも可能です。</li>
                        <li className={index.descriptionListItem}><strong>Setting:</strong> １日の目標時間とタグの色を設定できます。</li>
                    </ul>
                </section>
            </div>

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
        </>
    );
};

export default HomePage;
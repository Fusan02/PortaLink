'use client';

import { useState } from 'react';
import finishDialog from '../../styles/homePage/finishDialog.css';

interface FinishDialogProps {
    duration: number;
    onSave: (memo: string, tag?: string) => void;
    onClose: () => void;
}

const FinishDialog = ({ duration, onSave, onClose }: FinishDialogProps) => {
    const [memo, setMemo] = useState('');
    const [tag, setTag] = useState('');

    const formatDuration = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        return `${minutes}分 ${seconds}秒`;
    };

    const handleSave = () => {
        if (memo.trim()) {
            onSave(memo, tag || undefined);
        }
    };

    return (
        <div className={finishDialog.place}>
            <div className={finishDialog.container}>
                {/* 称賛メッセージ */}
                <div className={finishDialog.praise}>
                    👏 よく頑張った！
                </div>

                <div className={finishDialog.time}>
                    作業時間: {formatDuration(duration)}
                </div>

                {/* メモ入力 */}
                <div className={finishDialog.memo}>
                    <label className={finishDialog.memoLabel}>
                        📝 どんな作業をした？
                    </label>
                    <textarea 
                        value={memo}
                        onChange={(e) => setMemo(e.target.value)}
                        placeholder='例: 英語の勉強'
                        className={finishDialog.memoTextArea}
                    />
                </div>

                {/* タグ入力（オプション） */}
                <div className={finishDialog.tag}>
                    <label className={finishDialog.tagLabel}>
                        🏷️ タグ
                    </label>
                    <input
                        type='text'
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        placeholder='例: 学習, 開発'
                        className={finishDialog.tagInput}
                    />
                </div>

                {/* ボタン */}
                <div className={finishDialog.button}>
                    <button
                        onClick={onClose}
                        className={finishDialog.buttonClose}
                    >
                        キャンセル
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!memo.trim()}
                        className={finishDialog.buttonSave({ memo: !!memo.trim() })}
                    >
                        保存
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FinishDialog;
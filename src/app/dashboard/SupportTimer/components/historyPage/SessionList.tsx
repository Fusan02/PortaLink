'use client';

import sessionList from '../../styles/historyPage/sessionList.css';
import type { Session } from '../../types';

interface SessionListProps {
    sessions: Session[];
}

const SessionList = ({ sessions }: SessionListProps) => {
    const formatDate = (date: Date): string => {
        return new Intl.DateTimeFormat('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(date);
    };

    const formatDuration = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        return `${minutes}分`;
    };

    // タグごとの色設定
    const getTagColor = (tag?: string): string => {
        const tagColors: { [key: string]: string } = {
            '開発': '#2196F3',
            '学習': '#4CAF50',
            '企画': '#FF9800',
            'デザイン': '#9C27B0',
        };
        return tag ? (tagColors[tag] || '#757575') : '#757575';
    };

    return (
        <div className={sessionList.container}>
            {sessions.map((session) => (
                <div
                    key={session.id}
                    className={sessionList.sessions}
                >
                    {/* 日付 */}
                    <div className={sessionList.date}>
                        📅 {formatDate(session.startTime)}
                    </div>

                    {/* メイン情報 */}
                    <div className={sessionList.mainInfo}>
                        {/* 時間 */}
                        <div className={sessionList.time}>
                            {formatDuration(session.duration)}
                        </div>

                        {/* タグ */}
                        {session.tag && (
                            <div
                                className={sessionList.tag}
                                style={{
                                    backgroundColor: getTagColor(session.tag),
                                }}
                            >
                                {session.tag}
                            </div>
                        )}
                    </div>

                    {/* メモ */}
                    <div className={sessionList.memo}>
                        「{session.memo}」
                    </div>

                    {/* コメント */}
                    {session.aiComment && (
                        <div className={sessionList.comment}>
                            💬 {session.aiComment}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SessionList;
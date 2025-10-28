'use client';

import sessionList from '../../styles/historyPage/sessionList.css';
import type { Session } from '../../types';
import { useSettings } from '../../hooks/useSettings';

interface SessionListProps {
    sessions: Session[];
}

const SessionList = ({ sessions }: SessionListProps) => {
    const { getTagColor } = useSettings();
    
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
'use client';

import { useEffect, useState } from 'react';
import FilterBar from './FilterBar';
import SessionList from './SessionList';
import index from '../../styles/historyPage/index.css';
import { useSession } from '../../hooks/useSession';

const HistoryPage = () => {
    const { sessions, loading, error, fetchSessions } = useSession();
    const [searchQuery, setSearchQuery] = useState('');
    const [filterTag, setFilterTag] = useState('');

    // 初回マウント時にセッションを取得
    useEffect(() => {
        fetchSessions();
    }, [fetchSessions]);

    // フィルタリング処理
    const filteredSessions = sessions.filter((session) => {
        const matchesSearch = session.memo.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = filterTag === '' || filterTag === session.tag;
        return matchesSearch && matchesTag;
    });

    // タグ一覧を取得
    const allTags = Array.from(
        new Set(
            sessions
                .map((s) => s.tag)
                .filter((tag): tag is string => tag !== undefined)
        )
    );

    // ローディング中
    if (loading) {
        return (
            <div className={index.loadingContainer}>
                <div className={index.loading}>
                    読み込み中...
                </div>
            </div>
        );
    }

    // エラー時
    if (error) {
        return (
            <div className={index.errorContainer}>
                <div className={index.error}>
                    ⚠️ {error}
                </div>
            </div>
        );
    }

    return (
        <div className={index.page}>
            <h1 className={index.h1}>
                🕐 セッション履歴
            </h1>

            {/* 検索・フィルターバー */}
            <FilterBar 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                filterTag={filterTag}
                onFilterTagChange={setFilterTag}
                availableTags={allTags}
            />

            {/* セッション一覧 */}
            {sessions.length === 0 ? (
                <div className={index.nonSessionContainer}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                        📝
                    </div>
                    <div style={{ fontSize: '16px' }}>
                        まだセッションがありません
                    </div>
                    <div style={{ fontSize: '14px', marginTop: '8px' }}>
                        タイマーを使って作業を記録しよう！
                    </div>
                </div>
            ) : filteredSessions.length > 0 ? (
                <SessionList sessions={filteredSessions} />
            ) : (
                <div className={index.nonSearchSession}>
                    検索条件に一致するセッションが見つかりませんでした
                </div>
            )}
        </div>
    );
};

export default HistoryPage;
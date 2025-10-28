'use client';

import { useState } from 'react';
import type { Session } from '../../types';
import FilterBar from './FilterBar';
import SessionList from './SessionList';
import index from '../../styles/historyPage/index.css';

const HistoryPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterTag, setFilterTag] = useState('');

    // 仮データ (後でSupabaseに設定)
    const sessions: Session[] = [
        {
            id: '1',
            startTime: new Date('2025-10-20T14:00:00'),
            endTime: new Date('2025-10-20T14:25:00'),
            duration: 1500, // 25分 = 1500秒
            memo: '英語の勉強',
            tag: '学習',
            aiComment: 'えらい！',
        },
        {
            id: '2',
            startTime: new Date('2025-10-19T10:30:00'),
            endTime: new Date('2025-10-19T11:15:00'),
            duration: 2700, // 45分 = 2700秒
            memo: 'React練習',
            tag: '開発',
            aiComment: 'いい調子だね！',
        },
        {
            id: '3',
            startTime: new Date('2025-10-18T15:00:00'),
            endTime: new Date('2025-10-18T16:00:00'),
            duration: 3600, // 60分 = 3600秒
            memo: 'TypeScript型定義の整理',
            tag: '開発',
            aiComment: '',
        },
        {
            id: '4',
            startTime: new Date('2025-10-17T09:00:00'),
            endTime: new Date('2025-10-17T09:30:00'),
            duration: 1800, // 30分 = 1800秒
            memo: 'プロジェクト設計書作成',
            tag: '企画',
            aiComment: '素晴らしい集中力！',
        },
    ];

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
            {filteredSessions.length > 0 ? (
                <SessionList sessions={filteredSessions} />
            ) : (
                <div className={index.session}>
                    セッションが見つかりませんでした
                </div>
            )}
        </div>
    );
};

export default HistoryPage;
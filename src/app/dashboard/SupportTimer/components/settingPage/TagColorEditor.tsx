'use client';

import { useState, useEffect } from 'react';
import { useSession } from '../../hooks/useSession';
import tagColorEditor from '../../styles/settingPage/tagColorEditot.css';

interface TagColorEditorProps {
    tagColors: { [key: string]: string };
    onColorChange: (tagName: string, color: string) => void;
}

const TagColorEditor = ({ tagColors, onColorChange }: TagColorEditorProps) => {
    const { sessions, fetchSessions } = useSession();
    const [allTags, setAllTags] = useState<string[]>([]);

    // 初回マウント時にセッションを取得
    useEffect(() => {
        fetchSessions();
    }, [fetchSessions]);

    // セッションから使用されているタグのみを取得
    useEffect(() => {
        const sessionTags = Array.from(
            new Set(
                sessions
                    .map((s) => s.tag)
                    .filter((tag): tag is string => tag !== undefined)
            )
        );

        setAllTags(sessionTags);
    }, [sessions]);

    return (
        <div className={tagColorEditor.container}>
            <div className={tagColorEditor.title}>
                🎨 タグの色設定
            </div>

            {allTags.length === 0 ? (
                <div className={tagColorEditor.nonTag}>
                    まだタグが使用されていません
                </div>
            ) : (
                <div className={tagColorEditor.tags}>
                    {allTags
                        .filter((tag) => tag && tag.trim() !== '')
                        .map((tag) => (
                            <div
                                key={tag}
                                className={tagColorEditor.tagContainer}
                            >
                                <div
                                    className={tagColorEditor.tag}
                                    style={{ backgroundColor: tagColors[tag] || '#757575' }}
                                >
                                    {tag}
                                </div>

                                <input
                                    type='color'
                                    value={tagColors[tag] || '#757575'}
                                    onChange={(e) => onColorChange(tag, e.target.value)}
                                    className={tagColorEditor.input}
                                />

                                <span className={tagColorEditor.span}>
                                    {tagColors[tag]}
                                </span>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default TagColorEditor;
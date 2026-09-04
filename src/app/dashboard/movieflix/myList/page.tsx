'use client';

import { useEffect, useRef, useState } from 'react';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './myList.css';
import { useLists } from '../hooks/useLists';
import Loading from '../components/Loading/loading';
import ListCard from './components/ListCard/ListCard';
import ExpandedListMovies from './components/ExpandedListMovies/ExpandedListMovies';

const MyList = () => {
    const {
        lists,
        loading: listsLoading,
        fetchLists,
        createList,
        deleteList
    } = useLists();

    const [newListName, setNewListName] = useState('');

    const isCreatingRef = useRef(false);

    const [expandedListIds, setExpandedListIds] = useState<Set<string>>(
        new Set()
    );

    const toggleExpanded = (listId: string) => {
        setExpandedListIds(prev => {
            const next = new Set(prev);
            if (next.has(listId)) {
                next.delete(listId);
            } else {
                next.add(listId);
            }
            return next;
        });
    };

    // 展開中のリストが常に先頭に来るよう並べ替える
    const orderedLists =
        expandedListIds.size > 0
            ? [
                  ...lists.filter(list => expandedListIds.has(list.id)),
                  ...lists.filter(list => !expandedListIds.has(list.id))
              ]
            : lists;

    useEffect(() => {
        fetchLists();
    }, [fetchLists]);

    const handleCreateList = async () => {
        // useRef を使って同期的に状態を変更し高速な関数呼び出しによるリスト複数作成問題に対処.
        if (isCreatingRef.current) return;
        isCreatingRef.current = true;

        const trimmed = newListName.trim();

        try {
            if (!trimmed) {
                window.alert('リスト名を入力してください');
                return;
            }

            const result = await createList(trimmed);
            if (result === 'duplicate') {
                window.alert('同じ名前のリストが既にあります');
                return;
            }
            setNewListName('');
        } finally {
            isCreatingRef.current = false;
        }
    };

    const handleDeleteList = async (listId: string) => {
        if (
            !window.confirm(
                'このリストを削除しますか？ リスト内の映画も一緒に削除されます'
            )
        )
            return;

        const success = await deleteList(listId);
        if (success) {
            // 削除したリストが選択中の場合, 選択状態をリセットする.
            setExpandedListIds(prev => {
                const next = new Set(prev);
                next.delete(listId);
                return next;
            });
        }
    };

    if (listsLoading) return <Loading />;

    return (
        <div className={toClassNames([styles.wrapper])}>
            <div className={styles.inputDiv}>
                <input
                    value={newListName}
                    onChange={e => setNewListName(e.target.value)}
                    placeholder='新しいリスト名'
                    className={styles.newListInput}
                />
                <button
                    onClick={handleCreateList}
                    className={styles.newListBtn}
                >
                    + 作成
                </button>
            </div>
            <div className={styles.listTabs}>
                {orderedLists.map(list => {
                    const isExpanded = expandedListIds.has(list.id);

                    return (
                        <div
                            key={list.id}
                            className={
                                isExpanded
                                    ? toClassNames([
                                          styles.listTabEntry,
                                          styles.listTabEntryExpanded
                                      ])
                                    : styles.listTabEntry
                            }
                        >
                            <ListCard
                                name={list.name}
                                itemCount={list.itemCount}
                                isExpanded={isExpanded}
                                isFolded={
                                    expandedListIds.size > 0 && !isExpanded
                                }
                                onClick={() => toggleExpanded(list.id)}
                                onDelete={() => handleDeleteList(list.id)}
                            />

                            {isExpanded && (
                                <ExpandedListMovies listId={list.id} />
                            )}
                        </div>
                    );
                })}
            </div>

            {lists.length === 0 && (
                <p className={styles.emptyMessage}>
                    まだリストがありません。上の欄から新しいリストを作成してください
                </p>
            )}
        </div>
    );
};

export default MyList;

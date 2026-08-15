'use client';

import { useEffect, useRef, useState } from 'react';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './myList.css';
import MovieCard from '../components/MovieCard/MovieCard';
import { useMyList } from '../hooks/useMyList';
import { useLists } from '../hooks/useLists';
import Loading from '../components/Loading/loading';
import ListCard from './components/ListCard/ListCard';

const MyList = () => {
  const {
    lists,
    loading: listsLoading,
    fetchLists,
    createList,
    deleteList
  } = useLists();
  const [selectedListId, setSelectedListId] = useState<string | null>(
    null
  );
  const [newListName, setNewListName] = useState('');

  const {
    myList,
    loading: myListLoading,
    error,
    fetchMyList,
    removeFromMyList
  } = useMyList(selectedListId);

  const isCreatingRef = useRef(false);

  // 展開中のリストが常に先頭に来るよう並べ替える
  const orderdLists = selectedListId
    ? [
        ...lists.filter(list => list.id === selectedListId),
        ...lists.filter(list => list.id !== selectedListId)
      ]
    : lists;

  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  // lists の取得が終わるまでは fetchMyList を呼ばない.
  useEffect(() => {
    if (listsLoading) return;
    fetchMyList();
  }, [fetchMyList, listsLoading]);

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
    if (success && selectedListId === listId) {
      // 削除したリストが選択中の場合, 選択状態をリセットする.
      setSelectedListId(null);
    }
  };

  if (listsLoading) return <Loading />;
  if (error) return <p>エラーが発生しました</p>;

  return (
    <div className={toClassNames([styles.wrapper])}>
      <div className={styles.inputDiv}>
        <input
          value={newListName}
          onChange={e => setNewListName(e.target.value)}
          placeholder='新しいリスト名'
          className={styles.newListInput}
        />
        <button onClick={handleCreateList} className={styles.newListBtn}>
          + 作成
        </button>
      </div>
      <div className={styles.listTabs}>
        {orderdLists.map(list => {
          const isExpanded = list.id === selectedListId;

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
                isFolded={selectedListId !== null && !isExpanded}
                onClick={() =>
                  setSelectedListId(prev =>
                    prev === list.id ? null : list.id
                  )
                }
                onDelete={() => handleDeleteList(list.id)}
              />

              {isExpanded &&
                (myListLoading ? (
                  <div>
                    <p className={styles.expandedLoading}>読み込み中...</p>
                  </div>
                ) : (
                  <div className={styles.expandedRow}>
                    {myList.length === 0 ? (
                      <p className={styles.emptyMessage}>
                        このリストに追加された作品はありせん
                      </p>
                    ) : (
                      myList.map(movie => (
                        <div key={movie.id} className={styles.cardWrap}>
                          <MovieCard movie={movie} />
                          <button
                            onClick={() => removeFromMyList(movie.id)}
                            className={styles.removeBtn}
                          >
                            削除
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                ))}
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

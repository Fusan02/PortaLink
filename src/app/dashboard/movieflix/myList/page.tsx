'use client';

import { useEffect } from 'react';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './myList.css';
import MovieCard from '../components/MovieCard/MovieCard';
import { useMyList } from '../hooks/useMyList';
import Loading from '../components/Loading/loading';

const MyList = () => {
  const {
    myList,
    loading,
    error,
    fetchMyList,
    removeFromMyList
  } = useMyList();

  useEffect(() => {
    fetchMyList();
  }, [fetchMyList]);

  if (loading) return <Loading />;
  if (error) return <p>エラーが発生しました</p>;

  return (
    <div
      className={toClassNames([styles.wrapper])}
    >
      <h2 className={styles.title}>マイリスト</h2>

      {myList.length === 0 ? (
        <p className={styles.emptyMessage}>
          マイリストに追加された作品はありません
        </p>
      ) : (
        <div className={styles.flexGrid}>
          {myList.map(movie => (
            <div
              key={movie.id}
              className={styles.cardWrap}
            >
              <MovieCard movie={movie} />
              <button
                onClick={() =>
                  removeFromMyList(movie.id)
                }
                className={styles.removeBtn}
              >
                削除
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;

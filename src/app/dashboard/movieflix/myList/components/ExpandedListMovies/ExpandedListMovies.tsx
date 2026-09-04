'use client';

import { useEffect } from 'react';
import { useMyList } from '../../../hooks/useMyList';
import styles from './ExpandedListMovies.css';
import MovieCard from '../../../components/MovieCard/MovieCard';

type Props = {
    listId: string;
};

const ExpandedListMovies = ({ listId }: Props) => {
    const { myList, loading, fetchMyList, removeFromMyList } =
        useMyList(listId);

    useEffect(() => {
        fetchMyList();
    }, [fetchMyList]);

    if (loading) {
        return <div className={styles.expandedLoading}>読み込み中...</div>;
    }

    if (myList.length === 0) {
        return (
            <p className={styles.emptyMessage}>
                このリストに追加された作品はありません
            </p>
        );
    }

    return (
        <div className={styles.expandedRow}>
            {myList.map(movie => (
                <div key={movie.id} className={styles.cardWrap}>
                    <MovieCard movie={movie} />
                    <button
                        onClick={() => removeFromMyList(movie.id)}
                        className={styles.removeBtn}
                    >
                        削除
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ExpandedListMovies;

'use client';

import { useState } from 'react';
import { mockMyList } from '../mock';
import { Movie } from '../types';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './myList.css';
import MovieCard from '../components/MovieCard/MovieCard';

const MyList = () => {
  const [myList] = useState<Movie[]>(mockMyList);

  return (
    <div className={toClassNames([styles.wrapper])}>
      <h2 className={styles.title}>マイリスト</h2>

      {myList.length === 0 ? (
        <p className={styles.emptyMessage}>マイリストに追加された作品はありません</p>
      ) : (
        <div className={styles.flexGrid}>
          {myList.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;

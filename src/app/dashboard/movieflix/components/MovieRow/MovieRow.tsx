import { useRef } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import type { Movie } from '../../types';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './MovieRow.css';

const SCROLL_AMOUNT = 900;

const MovieRow = ({ title, movies }: { title: string; movies: Movie[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'right' ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.movieRowSection}>
      <h2 className={styles.movieRowTitle}>{title}</h2>
      <div className={styles.wrapper}>
        <button
          className={toClassNames([styles.arrow, styles.arrowLeft])}
          onClick={() => scroll('left')}
        >
          ‹
        </button>
        <div className={styles.movieRowScroll} ref={scrollRef}>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          className={toClassNames([styles.arrow, styles.arrowRight])}
          onClick={() => scroll('right')}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default MovieRow;

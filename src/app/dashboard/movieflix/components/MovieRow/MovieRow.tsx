import { useRef } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import type { Movie } from '../../types';
import { toClassNames } from '@/utils/toClassNames_utils';
import rowStyles from './MovieRow.css';
import pageStyles from '../../movieflix.css';

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
    <section className={pageStyles.movieRowSection}>
      <h2 className={pageStyles.movieRowTitle}>{title}</h2>
      <div className={rowStyles.wrapper}>
        <button
          className={toClassNames([rowStyles.arrow, rowStyles.arrowLeft])}
          onClick={() => scroll('left')}
        >
          ‹
        </button>
        <div className={pageStyles.movieRowScroll} ref={scrollRef}>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          className={toClassNames([rowStyles.arrow, rowStyles.arrowRight])}
          onClick={() => scroll('right')}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default MovieRow;

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './MovieCard.css';
import type { Movie } from '../../types/index';

type Props = {
  movie: Movie;
};

const MovieCard = (props: Props) => {
  const { movie } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/dashboard/movieflix/${movie.id}`}
      className={toClassNames([styles.movieCard])}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={toClassNames([styles.movieCardImgwrap])}>
        <Image
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          priority
          alt={movie.original_title}
          width={300}
          height={450}
          className={toClassNames([styles.movieCardImage])}
          style={isHovered ? { filter: 'brightness(0.7) blur(1px)' } : {}}
        />
        <div
          className={toClassNames([styles.movieCardOverlay])}
          style={isHovered ? { opacity: 1 } : {}}
        >
          <h3 className={toClassNames([styles.movieCardTitle])}>{movie.original_title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

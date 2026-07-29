'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './MovieDetail.css';
import {
  ArrowLeft,
  Clock,
  Star
} from 'lucide-react';
import type { Movie } from '../types';
import { useEffect, useState } from 'react';
import { fetchMovieDetail } from '../api/movie';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faPlay,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { useMyList } from '../hooks/useMyList';

const MovieDetail = () => {
  const router = useRouter();
  const params = useParams();
  const movieId = params?.movieId as
    | string
    | undefined;
  const { addToMyList, checkInMyList } =
    useMyList();

  const [movie, setMovie] =
    useState<Movie | null>(null);
  const [isLoading, setIsLoading] =
    useState(true);
  const [isError, setIsError] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToMyList = async () => {
    if (!movie) return;
    const result = await addToMyList(movie.id);

    if (result === 'duplicate') {
      alert('既にマイリストに追加済みです');
      setAdded(true);
      return;
    }
    if (result === 'added') {
      setAdded(true);
    }
  };

  useEffect(() => {
    if (!movieId) return;

    fetchMovieDetail(movieId)
      .then(setMovie)
      .catch(() => setIsError(true));

    checkInMyList(movieId)
      .then(result => setAdded(result))
      .finally(() => setIsLoading(false));
  }, [movieId, checkInMyList]);

  if (isLoading) return <Loading />;
  if (isError) return <p>エラーが発生しました</p>;

  return (
    <div
      className={toClassNames([
        styles.movieDetailRoot
      ])}
    >
      {movie && (
        <>
          <div
            className={toClassNames([
              styles.movieDetailBackdrop
            ])}
            style={{
              backgroundImage: `url(${'https://image.tmdb.org/t/p/w500' + movie.poster_path})`
            }}
          />
          <div
            className={toClassNames([
              styles.movieDetailBackdropGradient
            ])}
          />
          <div
            className={toClassNames([
              styles.movieDetailContainer
            ])}
          >
            <button
              onClick={() =>
                router.replace(
                  '/dashboard/movieflix'
                )
              }
              className={toClassNames([
                styles.movieDetailBacklink
              ])}
            >
              <ArrowLeft
                className={toClassNames([
                  styles.movieDetailBacklinkIcon
                ])}
                size={'1.8vw'}
              />
              Back to home
            </button>
            <div
              className={toClassNames([
                styles.movieDetailGrid
              ])}
            >
              <div
                className={toClassNames([
                  styles.movieDetailPosterWrap
                ])}
              >
                <Image
                  src={
                    'https://image.tmdb.org/t/p/w500' +
                    movie.poster_path
                  }
                  alt={movie.original_title}
                  width={500}
                  height={750}
                  className={toClassNames([
                    styles.movieDetailPosterImg
                  ])}
                />
              </div>
              <div
                className={toClassNames([
                  styles.movieDetailDetails
                ])}
              >
                <h1
                  className={toClassNames([
                    styles.movieDetailTitle
                  ])}
                >
                  {movie.original_title}
                </h1>
                <div
                  className={toClassNames([
                    styles.movieDetailBadges
                  ])}
                >
                  <span
                    className={toClassNames([
                      styles.badgesOutline
                    ])}
                  >
                    {movie.year}
                  </span>
                  <span
                    className={toClassNames([
                      styles.badgesOutline
                    ])}
                  >
                    PG-13
                  </span>
                  <span
                    className={toClassNames([
                      styles.badgesOutline
                    ])}
                  >
                    <Clock
                      className={toClassNames([
                        styles.badgesIconSvg
                      ])}
                      size={14}
                    />
                    {movie.runtime}分
                  </span>
                  <span
                    className={toClassNames([
                      styles.badgesOutline
                    ])}
                  >
                    <Star
                      className={toClassNames([
                        styles.badgesIconSvg,
                        styles.badgesStar
                      ])}
                      size={14}
                    />
                    {(movie.rating / 10).toFixed(
                      1
                    )}
                  </span>
                </div>
                <p
                  className={toClassNames([
                    styles.movieDetailOverview
                  ])}
                >
                  {movie.overview}
                </p>
                <div
                  className={toClassNames([
                    styles.movieDetailGenres
                  ])}
                >
                  {movie.genres.map(g => (
                    <span
                      key={g}
                      className={toClassNames([
                        styles.badgesGenre
                      ])}
                    >
                      {g}
                    </span>
                  ))}
                </div>
                <div
                  className={toClassNames([
                    styles.movieDetailActions
                  ])}
                >
                  <button
                    onClick={() =>
                      alert('未実装です')
                    }
                    className={toClassNames([
                      styles.movieDetailBtn,
                      styles.movieDetailBtnPrimary
                    ])}
                  >
                    <FontAwesomeIcon
                      icon={faPlay}
                      className={styles.icon}
                    />
                    Watch Now
                  </button>
                  <button
                    onClick={() =>
                      handleAddToMyList()
                    }
                    disabled={added}
                    className={toClassNames([
                      styles.movieDetailBtn
                    ])}
                  >
                    {added ? (
                      ''
                    ) : (
                      <FontAwesomeIcon
                        icon={faPlus}
                        className={styles.icon}
                      />
                    )}
                    {added
                      ? '追加済み'
                      : 'Add to My List'}
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.themoviedb.org/movie/${movie.id}?language=ja`,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    className={toClassNames([
                      styles.movieDetailBtn
                    ])}
                  >
                    <FontAwesomeIcon
                      icon={faPen}
                      className={styles.icon}
                    />
                    概要を書く
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;

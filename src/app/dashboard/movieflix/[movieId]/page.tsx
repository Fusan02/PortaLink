'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './MovieDetail.css';
import { ArrowLeft, Clock, Star } from 'lucide-react';
import type { Movie } from '../types';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieDetail } from '../api/movie';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useLists } from '../hooks/useLists';
import TrailerModal from '../components/TrailerModal/TrailerModal';
import { useTrailer } from '../hooks/useTrailer';

const MovieDetail = () => {
    const router = useRouter();
    const params = useParams();
    const movieId = params?.movieId as string | undefined;
    const {
        lists,
        loading: listsLoading,
        fetchLists,
        addMovieToList,
        removeMovieFromList,
        fetchListIdsContainingMovie
    } = useLists();

    const [movie, setMovie] = useState<Movie | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isCheckingLists, setIsCheckingLists] = useState(true);
    const [checkedListIds, setCheckedListIds] = useState<Set<string>>(
        new Set()
    );
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const pickerRef = useRef<HTMLDivElement>(null);

    const { trailerKey, isTrailerLoading, openTrailer, closeTrailer } =
        useTrailer();

    useEffect(() => {
        fetchLists();
    }, [fetchLists]);

    useEffect(() => {
        if (!movieId) return;

        fetchMovieDetail(movieId)
            .then(setMovie)
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));

        fetchListIdsContainingMovie(movieId)
            .then(ids => setCheckedListIds(new Set(ids)))
            .finally(() => setIsCheckingLists(false));
    }, [movieId, fetchListIdsContainingMovie]);

    useEffect(() => {
        if (!isPickerOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                pickerRef.current &&
                !pickerRef.current.contains(event.target as Node)
            ) {
                setIsPickerOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [isPickerOpen]);

    const handleToggleList = async (listId: string) => {
        if (!movieId) return;

        if (checkedListIds.has(listId)) {
            const success = await removeMovieFromList(listId, movieId);
            if (success) {
                setCheckedListIds(prev => {
                    const next = new Set(prev);
                    next.delete(listId);
                    return next;
                });
            }
        } else {
            const result = await addMovieToList(listId, movieId);
            if (result === 'added' || result === 'dupulicate') {
                setCheckedListIds(prev => new Set(prev).add(listId));
            }
        }
    };

    if (isLoading || listsLoading || isCheckingLists) return <Loading />;
    if (isError) return <p>エラーが発生しました</p>;

    return (
        <div className={toClassNames([styles.movieDetailRoot])}>
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
                                router.replace('/dashboard/movieflix')
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
                                    priority
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
                                        {(movie.rating / 10).toFixed(1)}
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
                                            movieId && openTrailer(movieId)
                                        }
                                        disabled={isTrailerLoading}
                                        className={toClassNames([
                                            styles.movieDetailBtn,
                                            styles.movieDetailBtnPrimary
                                        ])}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPlay}
                                            className={styles.icon}
                                        />
                                        Play Trailer
                                    </button>
                                    <div
                                        className={styles.addToListWrap}
                                        ref={pickerRef}
                                    >
                                        <button
                                            onClick={() =>
                                                setIsPickerOpen(
                                                    prev => !prev
                                                )
                                            }
                                            className={toClassNames([
                                                styles.movieDetailBtn
                                            ])}
                                        >
                                            <FontAwesomeIcon
                                                icon={faPlus}
                                                className={styles.icon}
                                            />
                                            {checkedListIds.size > 0
                                                ? `追加済み (${checkedListIds.size})`
                                                : 'Add to My List'}
                                        </button>

                                        {isPickerOpen && (
                                            <div
                                                className={
                                                    styles.listPicker
                                                }
                                            >
                                                {lists.length === 0 ? (
                                                    <p
                                                        className={
                                                            styles.listPickerEmpty
                                                        }
                                                    >
                                                        リストがありません.
                                                        マイリストページで作成してください.
                                                    </p>
                                                ) : (
                                                    lists.map(list => (
                                                        <label
                                                            key={list.id}
                                                            className={
                                                                styles.listPickerItem
                                                            }
                                                        >
                                                            <input
                                                                type='checkbox'
                                                                checked={checkedListIds.has(
                                                                    list.id
                                                                )}
                                                                onChange={() =>
                                                                    handleToggleList(
                                                                        list.id
                                                                    )
                                                                }
                                                                className={
                                                                    styles.listPickerCheckbox
                                                                }
                                                            />
                                                            {list.name}
                                                        </label>
                                                    ))
                                                )}
                                            </div>
                                        )}
                                    </div>
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
            {trailerKey && (
                <TrailerModal
                    videoKey={trailerKey}
                    onClose={closeTrailer}
                />
            )}
        </div>
    );
};

export default MovieDetail;

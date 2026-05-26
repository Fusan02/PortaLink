import Link from 'next/link';
import Image from 'next/image';
import '../../page.css';
import type { Movie } from '../../types/index';

type Props = {
    movie: Movie;
};

const MovieCard = (props: Props) => {
    const { movie } = props;

    return (
        <Link href={`/dashboard/movieflix/${movie.id}`} className='movie-card'>
            <div className='movie-card__imgwrap'>
                <Image
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                    alt={movie.original_title}
                    width={300}
                    height={450}
                    className='movie-card__image'
                />
                <div className='movie-card__overlay'>
                    <h3 className='movie-card__title'>
                        {movie.original_title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;

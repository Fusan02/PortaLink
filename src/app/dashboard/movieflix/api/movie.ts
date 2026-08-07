import type {
  Movie,
  MovieJson,
  MovieDetailJson
} from '../types';

const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
};

const fetchPopularMovies = async (): Promise<
  Movie[]
> => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?language=ja&page=1`,
    { headers }
  );
  const data = await res.json();
  return data.results.map((movie: MovieJson) => ({
    id: movie.id,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    overview: movie.overview,
    release_date: movie.release_date
  })) as Movie[];
};

const fetchMovieDetail = async (
  movieId: string
): Promise<Movie> => {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}?language=ja&append_to_response=credits`,
    {
      headers
    }
  );
  const data =
    (await res.json()) as MovieDetailJson;
  return {
    id: data.id,
    original_title: data.title,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
    overview: data.overview,
    release_date: data.release_date,
    year: Number(data.release_date.split('-')[0]),
    rating: data.vote_average,
    runtime: data.runtime,
    voteCount: data.vote_count,
    genres: data.genres.map(genre => genre.name)
  };
};

const fetchMoviesByKeyword = async (
  keyword: string
): Promise<Movie[]> => {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(keyword)}&language=ja&page=1`,
    {
      headers
    }
  );
  const data = await res.json();
  return data.results.map((movie: MovieJson) => ({
    id: movie.id,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    overview: movie.overview,
    release_date: movie.release_date
  })) as Movie[];
};

export {
  fetchPopularMovies,
  fetchMovieDetail,
  fetchMoviesByKeyword
};

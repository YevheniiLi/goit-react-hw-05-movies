// const API_KEY = '92877a4ab4a72fba8282e2dde2ed8a67';

// /trending/get-trending
// /search/search-movies
// /movies/get-movie-details
// /movies/get-movie-credits
// /movies/get-movie-reviews

export const API = {
  key: '92877a4ab4a72fba8282e2dde2ed8a67',
  requestAPI: 'https://api.themoviedb.org/3/',
  trending: '/trending',
  imgURL: 'https://image.tmdb.org/t/p/w500',
  searchMovies: '/search/search-movies ',
  moviesDetails: '/movies/get-movie-details',
  moviesCredits: '/movies/get-movie-credits',
  moviesReviews: '/movies/get-movie-reviews',
};

export const getTrendingFilms = obj => {
  const { requestAPI, trending, key } = obj;
  return fetch(`${requestAPI}${trending}/all/day?api_key=${key}`);
};

export const getMovieDetails = (obj, id) => {
  const { requestAPI, key } = obj;
  return fetch(`${requestAPI}/movie/${id}?api_key=${key}&language=en-US`).then(
    r => r.json()
  );
};

export const getMovieDetailsCast = (obj, id) => {
  const { requestAPI, moviesCredits, key } = obj;
  return fetch(
    `${requestAPI}/movie/${id}${moviesCredits}?api_key=${key}language=en-US`
  ).then(r => r.json());
};

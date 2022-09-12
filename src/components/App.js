import { GlobalStyle } from 'GlobalStyle';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'pages/MovieDetails/Cast/Cast';
import { Box } from 'Box';
import { useState, useEffect } from 'react';
import { getTrendingFilms, API} from './api/api';
import { Review } from 'pages/MovieDetails/Reviews/Reviews';


export const App = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

useEffect(() => {
  getTrendingFilms(API)
  .then(r => r.json())
  .then(({results}) => {
    setTrendingFilms([...results.map(({name, title, id}) => {
      return {name: name || title, id}
    })])
  })
},[])


  return (
    <>
      <Box as="header">
        <Box as="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Box>
      </Box>
      <Routes>
        <Route path="/" element={<Home trendingFilms={trendingFilms} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Routes>
      <GlobalStyle />
     </>
  );
};

// - '/' Home
// - '/movies' Movies
//   -'/movies/:movieId' MovieDetails
//   -'/movie/:movieId/cast' Cast
//   -'/movie/:movieId/reviews' Reviews;

import { useState, useEffect } from 'react';
import { getTrending } from 'api/api';
import { MoviesList } from 'components/MovieList/MoviesList';
import { MainTitle } from 'components/Styles/MainTitle.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(result => {
      const { results } = result;
      setTrendingMovies(results);
    });
  }, []);

  return (
    <div>
      <MainTitle>Trending movies today! </MainTitle>
      <MoviesList movies={trendingMovies} />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { getTrending } from 'components/api/api';
import { MoviesList } from 'components/MovieComponent/MovieList/MoviesList';
import { MainTitle } from 'components/Container/MainTitle.styled';

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

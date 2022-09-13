import PropTypes from 'prop-types';
import { Genres } from 'components/MovieComponent/Genres/Genres';
import {
  MovieInfoCard,
  MovieInfoImg,
  MovieInfoTitle,
  MovieInfoWrapper,
  MoviePreTitle,
} from './MovieInfo.styled';

const filmYear = value => {
  const year = value.slice(0, 4);
  return year;
};

const filmRate = value => {
  const rating = value * 10;
  return rating.toFixed(1) + '%';
};


export const MovieInfo = ({ movie }) => {
  return (
    <MovieInfoCard>
      <MovieInfoImg
        src={
          movie.poster_path
            ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
            : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
        }
        alt=""
      />
      <div>
        <MovieInfoTitle>
          {movie.title}
          {'  '}
          <span>({filmYear(movie.release_date)})</span>
        </MovieInfoTitle>
        <MovieInfoWrapper>
          Rating: <span>{filmRate(movie.vote_average)}</span>
        </MovieInfoWrapper>
        <MovieInfoWrapper>
          <MoviePreTitle>Overview:</MoviePreTitle> {movie.overview}
        </MovieInfoWrapper>
        <MovieInfoWrapper>
          <MoviePreTitle>Genres:</MoviePreTitle>
          {<Genres movieGenres={movie.genres} />}
        </MovieInfoWrapper>
      </div>
    </MovieInfoCard>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

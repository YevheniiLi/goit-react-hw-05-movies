import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMoveDetails } from 'components/api/api';
// import { MovieInfoBlock } from 'components/MoveInfo/MovieInfo.styled';
import { MoveInfoTitle } from './MoviesDetails.styled';
import { MovieInfo } from 'components/MovieComponent/MovieInfo/MovieInfo';
import {
  BackButton,
  BackButtonIcon,
} from 'components/MovieComponent/BackButton/BackButton.styled';
import { LoaderSpinner } from 'components/Loader/Loader';
import { MovieData, AddListItem } from './MoviesDetails.styled';

export default function DetailsMovies() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation().state?.from ?? '/';

  useEffect(() => {
    getMoveDetails(movieId).then(result => {
      setMovieInfo(result.data);
    });
  }, [movieId]);

  return (
    <MovieData>
      <BackButton to={location}>
        <BackButtonIcon />
        Back
      </BackButton>
      {movieInfo && (
        <div>
          <MovieInfo movie={movieInfo} />
          <MoveInfoTitle>Addictional information:</MoveInfoTitle>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginBottom: '10px',
            }}
          >
            <AddListItem>
              <Link to="credits" state={{ from: location }}>
                Cast
              </Link>
            </AddListItem>
            <AddListItem>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </AddListItem>
          </ul>
          <Suspense fallback={<LoaderSpinner />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </MovieData>
  );
}

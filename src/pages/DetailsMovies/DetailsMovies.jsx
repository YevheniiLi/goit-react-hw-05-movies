import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMoveDetails } from 'api/api';
// import { MovieInfoBlock } from 'components/MoveInfo/MovieInfo.styled';
import { MoveInfoTitle } from './DetailsMovies.styled';
import { MovieInfo } from 'components/MoveInfo/MovieInfo';
import {
  BackButton,
  BackButtonIcon,
} from 'components/Styles/BackLink.styled';
import { LoaderSpinner } from 'components/Loader/Loader';
import { MovieData, AddListItem } from './DetailsMovies.styled';

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

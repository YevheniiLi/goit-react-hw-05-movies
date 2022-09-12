import { getMovieDetails, API } from 'components/api/api';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet} from 'react-router-dom';

export const MovieDetails = () => {
  const [currentFilm, setCurrentFilm] = useState({});
  const { movieId } = useParams();
  const { genres, overview, poster_path, release_date, title } = currentFilm;

  useEffect(() => {
    getMovieDetails(API, movieId).then(
      ({ genres, overview, poster_path, release_date, title }) =>
        setCurrentFilm({ genres, overview, poster_path, release_date, title })
    );
  }, [movieId]);

  const date = new Date(release_date);
  const releaseDate = date.getFullYear();

  return (
    <div>
      <button type="button">Go back </button>
      <div>
        <img
          src={API.imgURL + poster_path}
          alt={title}
          width={300}
          height={400}
        />
        <h1>
          {title} ({releaseDate})
        </h1>
        <p></p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Generes</h3>
        {genres && genres.map(item => <span key={item.name}>{item.name}</span>)}
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <Outlet />
        </ul>
      </div>
    </div>
  );
};

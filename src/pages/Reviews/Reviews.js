import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'components/api/api';
import { ReviewsList } from 'components/MovieComponent/ReviewsList/ReviewsList';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(result => {
      setReviews(result.data.results);
    });
  }, [movieId]);

  return <div>{reviews.length > 0 && <ReviewsList reviews={reviews} />}</div>;
}

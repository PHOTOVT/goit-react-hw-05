import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://api.example.com/movies/${movieId}/reviews`)
      .then((response) => response.json())
      .then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p><strong>{review.author}:</strong>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;

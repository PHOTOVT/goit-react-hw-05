import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from || '/movies';

  useEffect(() => {
    fetch(`https://api.example.com/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate(backLink)}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <nav>
        <Link to="cast" state={{ from: backLink }}>Cast</Link>
        {' | '}
        <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

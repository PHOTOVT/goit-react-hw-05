import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.example.com/movies/${movieId}/cast`)
      .then((response) => response.json())
      .then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

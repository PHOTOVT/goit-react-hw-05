import React from "react";
import { Link } from "react-router-dom";
import css from './MovieList.module.css'

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies to display</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link className={css.movieListLink} to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

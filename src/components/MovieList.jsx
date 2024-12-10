import React from "react";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies to display</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average} / 10</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

import React, { useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;

    const options = {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWNmNjI2ODk3YzA5OTIzZmM1ZTA4MmJiNWMwNjJjNCIsIm5iZiI6MTczMzgyNTcyMy4wNTMsInN1YiI6IjY3NTgxNGJiODEzOGJlNTVkOWExNDI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptZK7IUP4dUYhfQQlevY0DnfyTfy_D2rsAHo7Vrov4Y",
      },
    };

    axios
      .get(url, options)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.error('Error fetching movies:', err));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

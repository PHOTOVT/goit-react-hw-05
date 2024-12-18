import React, { useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!query.trim()) {
      setError("Please enter a movie title.");
      return;
    }

    setError(null);
    setLoading(true);

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWNmNjI2ODk3YzA5OTIzZmM1ZTA4MmJiNWMwNjJjNCIsIm5iZiI6MTczMzgyNTcyMy4wNTMsInN1YiI6IjY3NTgxNGJiODEzOGJlNTVkOWExNDI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptZK7IUP4dUYhfQQlevY0DnfyTfy_D2rsAHo7Vrov4Y",
      },
    };

    try {
      const response = await axios.get(url, options);
      setMovies(response.data.results);
    } catch (err) {
      console.error("Error fetching movies:", err.message);
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSearch}>
        <input
          className={css.searchInput}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
        />
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>

      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;

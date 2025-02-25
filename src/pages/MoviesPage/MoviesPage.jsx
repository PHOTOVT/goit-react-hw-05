import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const existingQuery = searchParams.get("query") || "";

  useEffect(() => {
    if (existingQuery) {
      setQuery(existingQuery);
      fetchMovies(existingQuery);
    }
  }, [existingQuery]);

  const fetchMovies = async (searchQuery) => {
    setError(null);
    setLoading(true);

    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
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
      console.error(err.message);
      setError("Failed to fetch movies. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError("Please enter a movie title");
      return;
    }

    setError(null);

    navigate(`/movies?query=${trimmedQuery}`);
    fetchMovies(trimmedQuery);
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSearch}>
        <input
          className={css.searchInput}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title..."
        />
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>

      {error && <p className={css.errorMessage}>{error}</p>}
      {loading && <p>Loading...</p>}

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;

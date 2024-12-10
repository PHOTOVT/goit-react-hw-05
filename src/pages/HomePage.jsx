import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import MoviesPage from "./MoviesPage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
        const options = {
          headers: {
            Authorization: "Bearer YOUR_ACCESS_TOKEN",
          },
        };
        const response = await axios.get(url, options);
        setMovies(response.data.results);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <MoviesPage />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url =
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
        const options = {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWNmNjI2ODk3YzA5OTIzZmM1ZTA4MmJiNWMwNjJjNCIsIm5iZiI6MTczMzgyNTcyMy4wNTMsInN1YiI6IjY3NTgxNGJiODEzOGJlNTVkOWExNDI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptZK7IUP4dUYhfQQlevY0DnfyTfy_D2rsAHo7Vrov4Y",
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
      <h1>Trending today: </h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;

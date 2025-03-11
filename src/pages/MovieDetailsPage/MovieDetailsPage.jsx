import React, { useEffect, useState, Suspense, useRef } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
        const options = {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWNmNjI2ODk3YzA5OTIzZmM1ZTA4MmJiNWMwNjJjNCIsIm5iZiI6MTczMzgyNTcyMy4wNTMsInN1YiI6IjY3NTgxNGJiODEzOGJlNTVkOWExNDI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptZK7IUP4dUYhfQQlevY0DnfyTfy_D2rsAHo7Vrov4Y",
          },
        };
        const response = await axios.get(url, options);
        setMovie(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch movie details:", err.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link className={css.goBackButton} to={backLinkRef.current}>
        Go back
      </Link>

      {error && <p>Error: {error}</p>}
      {movie ? (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="300"
            />
            <h2>{movie.title}</h2>
            <p>Overview: {movie.overview}</p>
            <p>Rating: {Math.round(movie.vote_average * 10)}%</p>
          </div>

          <h3>Additional information</h3>
          <ul>
            <li>
              <Link
                className={css.additionalInfo}
                to="cast"
                state={{ from: backLinkRef.current }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                className={css.additionalInfo}
                to="reviews"
                state={{ from: backLinkRef.current }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

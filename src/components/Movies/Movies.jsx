import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Page from "../Page/Page";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import {
  MOVIES_NOT_FOUND_ERROR_MESSAGE,
  REQUEST_ERROR_MESSAGE,
} from "../../utils/errorMessages";

const Movies = ({ isLoggedIn }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (query) => {
    setIsLoading(true);

    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (!storedMovies) {
      moviesApi
        .getMovies()
        .then((data) => {
          if (data) {
            localStorage.setItem("movies", JSON.stringify(data));
            filterStoredMovies(query);
          }
        })
        .catch(() => {
          setError(REQUEST_ERROR_MESSAGE);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filterStoredMovies(query);
    }
  };

  const filterStoredMovies = (query) => {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    const filteredMovies = filterMoviesByQuery(storedMovies, query);

    if (filteredMovies.length > 0) {
      setMovies(filteredMovies);
      setError(null);
    } else {
      setError(MOVIES_NOT_FOUND_ERROR_MESSAGE);
    }
    setIsLoading(false)
  };

  const filterMoviesByQuery = (movies, query) => {
    const regex = new RegExp(query, "i");

    const filteredMovies = movies.filter((movie) => {
      const nameRU = movie.nameRU;
      const nameEN = movie.nameEN;

      return regex.test(nameRU) || regex.test(nameEN);
    });

    return filteredMovies;
  }

  return (
    <Page isLoggedIn={isLoggedIn} pathName={"movies"} className={"movies"}>
      <SearchForm handleSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} error={error} />
      )}
    </Page>
  );
};

export default Movies;

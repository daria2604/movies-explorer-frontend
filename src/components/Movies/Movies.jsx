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
import { filterMovies } from "../../utils/filter";

const Movies = ({ isLoggedIn }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isShortMovieChecked, setIsShortMovieChecked] = useState(false);

  const storedMovies = JSON.parse(localStorage.getItem("movies"));

  const handleSearch = (query, isShortMovieChecked) => {
    setIsLoading(true);

    if (!storedMovies) {
      moviesApi
        .getMovies()
        .then((data) => {
          if (data) {
            localStorage.setItem("movies", JSON.stringify(data));
            filterStoredMovies(query, isShortMovieChecked);
          }
        })
        .catch(() => {
          setError(REQUEST_ERROR_MESSAGE);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filterStoredMovies(query, isShortMovieChecked);
    }
  };

  const filterStoredMovies = (query, isShortMovieChecked) => {
    const filteredMovies = filterMovies(
      storedMovies,
      query,
      isShortMovieChecked
    );

    if (filteredMovies.length > 0) {
      setMovies(filteredMovies);
      setError(null);
    } else {
      setError(MOVIES_NOT_FOUND_ERROR_MESSAGE);
    }
    setIsLoading(false);
  };

  const handleSwitch = () => {
    setIsShortMovieChecked(!isShortMovieChecked);
  };

  return (
    <Page isLoggedIn={isLoggedIn} pathName={"movies"} className={"movies"}>
      <SearchForm handleSearch={handleSearch} handleSwitch={handleSwitch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} error={error} />
      )}
    </Page>
  );
};

export default Movies;

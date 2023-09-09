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
    moviesApi
      .getMovies()
      .then((data) => {
        if (data) {
          setMovies(data);
        } else {
          setError(MOVIES_NOT_FOUND_ERROR_MESSAGE);
        }
      })
      .catch(() => {
        setError(REQUEST_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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

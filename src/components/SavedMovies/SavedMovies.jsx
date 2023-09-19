import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Page from "../Page/Page";
import SearchForm from "../SearchForm/SearchForm";
import { filterMovies } from "../../utils/filter";
import Preloader from "../Preloader/Preloader";
import {
  MOVIES_NOT_FOUND_ERROR_MESSAGE,
  REQUEST_ERROR_MESSAGE,
} from "../../utils/errorMessages";
import mainApi from "../../utils/MainApi";

const SavedMovies = ({ isLoggedIn }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isShortMovieChecked, setIsShortMovieChecked] = useState(false);

  const savedMovies = JSON.parse(localStorage.getItem("saved-movies"));

  useEffect(() => {
    setIsLoading(true);

    mainApi
      .getSavedMovies()
      .then((data) => {
        if (data.length > 0) {
          setMovies(savedMovies);
        } else {
          setError("Вы еще ничего не добавили в избранное.");
        }
      })
      .catch(() => {
        setError(REQUEST_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (query, isShortMovieChecked) => {
    setIsLoading(true);

    if (savedMovies) {
      mainApi
        .getSavedMovies()
        .then((data) => {
          if (data.length > 0) {
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
      setError("Вы еще ничего не добавили в избранное.");
    }
  };

  const filterStoredMovies = (query, isShortMovieChecked) => {
    const filteredMovies = filterMovies(
      savedMovies,
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
    <Page isLoggedIn={isLoggedIn} pathName={"saved-movies"} className={"saved"}>
      <SearchForm handleSearch={handleSearch} handleSwitch={handleSwitch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} error={error} />
      )}
    </Page>
  );
};

export default SavedMovies;

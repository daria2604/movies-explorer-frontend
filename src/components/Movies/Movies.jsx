import React, { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Page from "../Page/Page";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import {
  MOVIES_NOT_FOUND_ERROR_MESSAGE,
  REQUEST_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from "../../utils/errorMessages";
import { filterMovies } from "../../utils/filter";
import mainApi from "../../utils/MainApi";

const Movies = ({ isLoggedIn }) => {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSavedMoviesLoaded, setIsSavedMoviesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isShortMovieChecked, setIsShortMovieChecked] = useState(false);
  const storedMovies = JSON.parse(localStorage.getItem("movies"));

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
        setIsSavedMoviesLoaded(true);
        localStorage.setItem("saved-movies", JSON.stringify(data));
      })
      .catch(() => {
        setError(SERVER_ERROR_MESSAGE);
      });
  }, []);

  // сохранить загруженные фильмы, чтобы не было бесконечного цикла запросов к серверу
  useEffect(() => {
    if (isSavedMoviesLoaded) {
      setSavedMovies(savedMovies);
      localStorage.setItem("saved-movies", JSON.stringify(savedMovies));
    }
  }, [isSavedMoviesLoaded, savedMovies]);

  const handleSearch = (query, isShortMovieChecked) => {
    setIsLoading(true);
  
    if (!storedMovies) {
      moviesApi
        .getMovies()
        .then((data) => {
          if (data) {
            localStorage.setItem("movies", JSON.stringify(data));
            setMovies(data);
            filterStoredMovies(query, isShortMovieChecked, data);
          }
        })
        .catch(() => {
          setError(REQUEST_ERROR_MESSAGE);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filterStoredMovies(query, isShortMovieChecked, storedMovies);
    }
  };

  const filterStoredMovies = (query, isShortMovieChecked, storedMovies) => {
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
      <SearchForm handleSearch={handleSearch} handleSwitch={handleSwitch} isSubmitting={isLoading}/>
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          error={error}
        />
      )}
    </Page>
  );
};

export default Movies;

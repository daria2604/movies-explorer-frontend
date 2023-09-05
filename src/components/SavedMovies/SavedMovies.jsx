import React from "react";
import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Page from "../Page/Page";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({isLoggedIn}) => {
  return (
    <Page isLoggedIn={isLoggedIn} pathName={'saved-movies'} className={'saved'}>
      <SearchForm />
      <MoviesCardList />
    </Page>
  )
};

export default SavedMovies;

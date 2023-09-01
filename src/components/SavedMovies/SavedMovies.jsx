import React from "react";
import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Page from "../Page/Page";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

const SavedMovies = ({isLoggedIn}) => {
  return (
    <Page isLoggedIn={isLoggedIn} pathName={'saved-movies'} className={'saved'}>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </Page>
  )
};

export default SavedMovies;

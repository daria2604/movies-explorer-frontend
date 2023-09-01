import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";

const Movies = ({ isLoggedIn }) => {
  return (
    <Page isLoggedIn={isLoggedIn} pathName={'movies'} className={'movies'}>
      <SearchForm />
      <MoviesCardList />
      <Footer/>
    </Page>
  );
};

export default Movies;

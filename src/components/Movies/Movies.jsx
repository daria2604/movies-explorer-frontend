import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} pathName={'movies'}/>
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
      </main>
    </>
  );
};

export default Movies;

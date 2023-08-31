import React from "react";
import './SavedMovies.css';
import Page from "../Page/Page";

const SavedMovies = ({ isLoggedIn }) => {
  return (
    <Page isLoggedIn={isLoggedIn} pathName={'saved-movies'} className={'saved'} >
      
    </Page>
  )
};

export default SavedMovies;

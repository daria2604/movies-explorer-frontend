/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={
              <Main isLoggedIn={isLoggedIn} />
            }></Route>
            <Route path='/movies' element={<Movies isLoggedIn={isLoggedIn}/>}>
            </Route>
            <Route path='/saved-movies' element={<SavedMovies isLoggedIn={isLoggedIn}/>}>
            </Route>
          </Routes>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
};

export default App;

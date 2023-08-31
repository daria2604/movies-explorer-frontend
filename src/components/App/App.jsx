/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={
              <Main loggedIn={isLoggedIn} />
            }></Route>
            <Route path='/movies' element={<Movies/>}>
            </Route>
          </Routes>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
};

export default App;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Main loggedIn={isLoggedIn} />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
};

export default App;

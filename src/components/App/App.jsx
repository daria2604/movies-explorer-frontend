import React, { useEffect, useState } from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import { Route, Routes, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import {
  AUTHORIZATION_ERROR_MESSAGE,
  EMAIL_CONFLICT_ERROR_MESSAGE,
  INCORRECT_TOKEN_ERROR_MESSAGE,
  LOGIN_ERROR_MESSAGE,
  PROFILE_UPDATE_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from "../../utils/errorMessages";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // обработка сброса значения error при переходе между страницами
  useEffect(() => {
    const clearError = () => {
      setError(null);
    };

    return () => {
      clearError();
    };
  }, [navigate]);

  const checkToken = () => {
    setIsLoading(true);
    mainApi
      .getToken()
      .then((data) => {
        if (!data) {
          return;
        }
        setIsLoggedIn(true);
        getUserInfo();
      })
      .catch(() => {
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getUserInfo = () => {
    mainApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data.user);
      })
      .catch(() => {
        setError(INCORRECT_TOKEN_ERROR_MESSAGE);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    mainApi
      .register({ name, email, password })
      .then((data) => {
        if (data) {
          handleLogin({ email, password });
        }
      })
      .catch(() => {
        setIsLoggedIn(false);
        setError(EMAIL_CONFLICT_ERROR_MESSAGE);
      });
  };

  const handleLogin = ({ email, password }) => {
    mainApi
      .login({ email, password })
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
          setCurrentUser(data);
          getUserInfo();
          navigate("/movies", { replace: true });
        } else {
          setIsLoggedIn(false);
          setError(AUTHORIZATION_ERROR_MESSAGE);
        }
      })
      .catch(() => {
        setIsLoggedIn(false);
        setError(LOGIN_ERROR_MESSAGE);
      });
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then(() => {
        setCurrentUser({});
        setIsLoggedIn(false);
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch(() => {
        setError(SERVER_ERROR_MESSAGE);
      });
  };

  const handleUpdateUserInfo = ({ name, email }) => {
    setError(null)
    return new Promise((resolve, reject) => {
      mainApi
        .updateUserInfo({ name, email })
        .then((data) => {
          setCurrentUser(data);
          resolve();
        })
        .catch((err) => {
          reject(err);
          if(err === 409) {
            setError(EMAIL_CONFLICT_ERROR_MESSAGE)
          } else {
            setError(PROFILE_UPDATE_ERROR_MESSAGE);
          }
          
        });
    });
  };

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main isLoggedIn={isLoggedIn} />}></Route>
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={Movies}
                  isLoading={isLoading}
                />
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={SavedMovies}
                  isLoading={isLoading}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={Profile}
                  onLogout={handleLogout}
                  isLoading={isLoading}
                  onUpdateUserInfo={handleUpdateUserInfo}
                  errorMessage={error}
                />
              }
            ></Route>
            <Route
              path="/signup"
              element={<Register onRegister={handleRegister} error={error} />}
            ></Route>
            <Route
              path="/signin"
              element={<Login onLogin={handleLogin} error={error} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
};

export default App;

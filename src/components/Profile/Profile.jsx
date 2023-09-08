import React, { useState } from "react";
import "./Profile.css";
import Page from "../Page/Page";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Profile = ({ isLoggedIn }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <Page isLoggedIn={isLoggedIn} pathName={"profile"} className={"profile"}>
      <h1 className="profile__heading">Привет, Дарья!</h1>
      <form className="profile__form">
        <fieldset className="profile__fieldset">
          <label htmlFor="profileName" className="profile__label">
            Имя
            <input
              type="text"
              className="profile__input profile__input_type_name"
              name="profileName"
              id="profileName"
              value="Дарья"
              disabled
            />
          </label>

          <label htmlFor="profileEmail" className="profile__label">
            E-mail
            <input
              type="email"
              className="profile__input profile__input_type_email"
              name="profileEmail"
              id="profileEmail"
              value="pochta@yandex.ru"
              disabled
            />
          </label>
        </fieldset>
        <div className="profile__button-container">
          {!isClicked ? (
            <>
              <button
                type="button"
                className="profile__button profile__edit-button"
                onClick={handleClick}
              >
                Редактировать
              </button>
              <Link
                to="/signin"
                className="profile__button profile__signout-button"
              >
                Выйти из аккаунта
              </Link>
            </>
          ) : (
            <>
              <ErrorMessage type={"profile__error"}></ErrorMessage>
              <button
                type="submit"
                className="button profile__button profile__submit-button"
                onSubmit={handleSubmit}
              >
                Сохранить
              </button>
            </>
          )}
        </div>
      </form>
    </Page>
  );
};

export default Profile;

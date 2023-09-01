import React, { useState } from "react";
import './Profile.css';
import Page from "../Page/Page";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
import { errorMessages } from "../../utils/errorMessages";

const Profile = ({ isLoggedIn }) => {
  const [isClicked, setIsClicked] = useState(false);
  const inputs = document.querySelectorAll('.profile__input');
  const handleClick = () => {
    setIsClicked(!isClicked)
    inputs.forEach((input) => input.disabled = false)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <Page isLoggedIn={isLoggedIn} pathName={"profile"} className={"profile"}>
        <h1 className="profile__heading">Привет, Виталий!</h1>
        <form className="profile__form">
          <fieldset className="profile__fildset">
            <label htmlFor="profileName" className="profile__label">Имя</label>
            <input type="text" className="profile__input profile__input_type_name" name="profileName" value="Виталий" disabled/>
          </fieldset>
          <fieldset className="profile__fildset">
            <label htmlFor="profileEmail" className="profile__label">E-mail</label>
            <input type="email" className="profile__input profile__input_type_email" name="profileEmail" value="pochta@yandex.ru" disabled/>
          </fieldset>
          <div className="profile__button-container">
          <Error type={'profile__error'}>{errorMessages.profileUpdateErrorMessage}</Error>
          {!isClicked ? (
            <>
              <button type="button" className="profile__button profile__edit-button" onClick={handleClick}>Редактировать</button>
              <Link to="/signin" className="profile__button profile__signout-button">Выйти из аккаунта</Link>
            </>
          ) : (
            <button type="submit" className="profile__button profile__submit-button" onSubmit={handleSubmit}>Сохранить</button>
          )}
          </div>
        </form>
    </Page>
  )
};

export default Profile;

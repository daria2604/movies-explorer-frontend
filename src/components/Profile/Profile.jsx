import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import Page from "../Page/Page";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useFormWithValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({ isLoggedIn, onLogout, onUpdateUserInfo, errorMessage }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { values, setValues, handleChange, isValid, setIsValid, errors } =
    useFormWithValidation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsValid(false);
  }, [isSuccess, setIsValid]);

  const handleClick = () => {
    setIsClicked(true);
    setIsDisabled(false);
    setIsSuccess(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email } = values;

    setIsSubmitting(true);

    onUpdateUserInfo({ name, email })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setIsDisabled(true);
      })
      .catch(() => {
        setIsSubmitting(false);
        setIsSuccess(false);
      });
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <Page isLoggedIn={isLoggedIn} pathName={"profile"} className={"profile"}>
      <h1 className="profile__heading">{`Привет ${currentUser.name}!`}</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <fieldset className="profile__fieldset">
          <label htmlFor="profileName" className="profile__label">
            Имя
            <input
              type="text"
              className="profile__input profile__input_type_name"
              name="name"
              id="profileName"
              defaultValue={currentUser.name}
              disabled={isDisabled}
              minLength={2}
              maxLength={30}
              onChange={(evt) => {
                handleChange(evt);
                setValues({ ...values, name: evt.target.value });
              }}
              required
            />
          </label>
          {!isValid && (
            <ErrorMessage type={"profile-input"} isActive={true}>
              {errors?.name}
            </ErrorMessage>
          )}
          <label htmlFor="profileEmail" className="profile__label">
            E-mail
            <input
              type="email"
              className="profile__input profile__input_type_email"
              name="email"
              id="profileEmail"
              defaultValue={currentUser.email}
              disabled={isDisabled}
              onChange={(evt) => {
                handleChange(evt);
                setValues({ ...values, email: evt.target.value });
              }}
              required
            />
          </label>
          {!isValid && (
            <ErrorMessage type={"profile-input"} isActive={true}>
              {errors?.email}
            </ErrorMessage>
          )}
        </fieldset>
        <div className="profile__button-container">
          {isSuccess && (
            <p className="profile__success">Профиль успешно обновлен</p>
          )}
          {!isClicked || isSuccess ? (
            <>
              <button
                type="button"
                className="button profile__button profile__edit-button"
                onClick={handleClick}
              >
                Редактировать
              </button>
              <Link
                onClick={handleLogout}
                to="/signin"
                className="button profile__button profile__signout-button"
              >
                Выйти из аккаунта
              </Link>
            </>
          ) : (
            <>
              {(!isValid || !isSuccess) && (
                <ErrorMessage type={"profile"} isActive={true}>
                  {errorMessage}
                </ErrorMessage>
              )}
              <button
                type="submit"
                className={`button profile__button profile__submit-button ${
                  !isValid ||
                  (currentUser.name === values.name &&
                    currentUser.email === values.email)
                    ? "button_disabled profile__submit-button_disabled"
                    : ""
                }`}
                disabled={
                  !isValid ||
                  isSubmitting ||
                  (currentUser.name === values.name &&
                    currentUser.email === values.email)
                }
              >
                {isSubmitting ? "Сохранение..." : "Сохранить"}
              </button>
            </>
          )}
        </div>
      </form>
    </Page>
  );
};

export default Profile;

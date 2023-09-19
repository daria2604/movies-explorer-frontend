import React from "react";
import "./Login.css";
import Auth from "../Auth/Auth";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import { useFormWithValidation } from "../../hooks/useFormAndValidation";

const Login = ({ onLogin, error }) => {
  const { isValid, handleChange, values, errors } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = values;

    onLogin({ email, password });
  };

  return (
    <Auth
      heading={"Рады видеть!"}
      captionText={"Ещё не зарегистрированы?"}
      path={"/signup"}
      linkText={"Регистрация"}
    >
      <Form
        formType={"login"}
        buttonText={"Войти"}
        onSubmit={handleSubmit}
        isValid={isValid}
        hasErrors={errors}
        errorMessage={error}
      >
        <FormInput
          inputType={"email"}
          inputName={"email"}
          inputValue={values?.email || ""}
          minLength={2}
          label={"E-mail"}
          placeholderText={"Введите e-mail"}
          onChange={(evt) => {
            handleChange(evt);
          }}
          hasErrors={errors?.email}
          errorMessage={errors?.email}
        />
        <FormInput
          inputType={"password"}
          inputName={"password"}
          inputValue={values?.password || ""}
          label={"Пароль"}
          placeholderText={"Введите пароль"}
          onChange={(evt) => {
            handleChange(evt);
          }}
          hasErrors={errors?.password}
          errorMessage={errors?.password}
        />
      </Form>
    </Auth>
  );
};

export default Login;

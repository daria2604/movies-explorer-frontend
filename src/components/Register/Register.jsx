import React from "react";
import "./Register.css";
import Auth from "../Auth/Auth";
import FormInput from "../FormInput/FormInput";
import Form from "../Form/Form";
import { useFormWithValidation } from "../../hooks/useFormAndValidation";

const Register = ({ onRegister, error, isLoading }) => {
  const { isValid, handleChange, values, errors } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password, name } = values;

    onRegister({ name, email, password });
  };

  return (
    <Auth
      heading={"Добро пожаловать!"}
      captionText={"Уже зарегистрированы?"}
      path={"/signin"}
      linkText={"Войти"}
    >
      <Form
        formType={"register"}
        buttonText={"Зарегистрироваться"}
        isValid={isValid}
        onSubmit={handleSubmit}
        hasErrors={errors}
        errorMessage={error}
        isLoading={isLoading}
      >
        <FormInput
          inputType={"text"}
          inputName={"name"}
          inputValue={values?.name || ""}
          label={"Имя"}
          placeholderText={"Введите имя"}
          minLength={2}
          maxLength={30}
          onChange={(evt) => {
            handleChange(evt);
          }}
          hasErrors={errors?.name}
          errorMessage={errors?.name}
        />
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
          minLength={5}
          maxLength={16}
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

export default Register;

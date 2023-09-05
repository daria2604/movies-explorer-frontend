import React from "react";
import "./Register.css";
import Auth from "../Auth/Auth";
import FormInput from "../FormInput/FormInput";
import Form from "../Form/Form";

const Register = () => {
  return (
    <Auth heading={"Добро пожаловать!"} captionText={"Уже зарегистрированы?"} path={"/signin"} linkText={"Войти"}>
      <Form
        formType={"register"}
        buttonText={"Зарегистрироваться"}
      >
        <FormInput
          inputType={"text"}
          inputName={"name"}
          label={"Имя"}
          placeholderText={'Введите имя'}
          maxLength={30}
        />
        <FormInput
          inputType={"email"}
          inputName={"email"}
          label={"E-mail"}
          placeholderText={'Введите e-mail'}
        />
        <FormInput
          inputType={"password"}
          inputName={"password"}
          label={"Пароль"}
          placeholderText={'Введите пароль'}
          maxLength={16}
        />
      </Form>
    </Auth>
  );
};

export default Register;

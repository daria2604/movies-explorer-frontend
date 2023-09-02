import React from "react";
import "./Register.css";
import Auth from "../Auth/Auth";
import FormInput from "../FormInput/FormInput";
import Form from "../Form/Form";

const Register = () => {
  return (
    <Auth heading={"Добро пожаловать!"}>
      <Form
        formType={"register"}
        buttonText={"Зарегистрироваться"}
        captionText={"Уже зарегистрированы?"}
        path={"/signin"}
        linkText={"Войти"}
      >
        <FormInput
          inputType={"text"}
          inputName={"name"}
          label={"Имя"}
          inputValue={"Дарья"}
        />
        <FormInput
          inputType={"email"}
          inputName={"email"}
          label={"E-mail"}
          inputValue={"pochta@yandex.ru"}
        />
        <FormInput
          inputType={"password"}
          inputName={"password"}
          label={"Пароль"}
        />
      </Form>
    </Auth>
  );
};

export default Register;

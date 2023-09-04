import React from "react";
import './Login.css';
import Auth from "../Auth/Auth";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";

const Login = () => {
  return (
    <Auth heading={'Рады видеть!'}>
      <Form
        formType={"login"}
        buttonText={"Войти"}
        captionText={"Ещё не зарегистрированы?"}
        path={"/signup"}
        linkText={"Регистрация"}
      >
        <FormInput
          inputType={"email"}
          inputName={"email"}
          label={"E-mail"}
          placeholderText={'Ведите e-mail'}
        />
        <FormInput
          inputType={"password"}
          inputName={"password"}
          label={"Пароль"}
          placeholderText={'Введите пароль'}
        />
      </Form>
    </Auth>
  )
};

export default Login;

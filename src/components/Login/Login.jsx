import React from "react";
import './Login.css';
import AuthPage from "../AuthPage/AuthPage";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";

const Login = () => {
  return (
    <AuthPage heading={'Рады видеть!'}>
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
          inputValue={"pochta@yandex.ru"}
        />
        <FormInput
          inputType={"password"}
          inputName={"password"}
          label={"Пароль"}
        />
      </Form>
    </AuthPage>
  )
};

export default Login;

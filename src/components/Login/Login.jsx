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
          inputValue={"pochta@yandex.ru"}
        />
        <FormInput
          inputType={"password"}
          inputName={"password"}
          label={"Пароль"}
        />
      </Form>
    </Auth>
  )
};

export default Login;

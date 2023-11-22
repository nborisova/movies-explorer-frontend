import React from 'react';
import AuthPage from '../AuthPage/AuthPage';

function Login() {
  return(
    <AuthPage title='Рады видеть!' buttonText='Войти' text='Ещё не зарегистрированы?' link='/signup' linkText='Регистрация'/>
  )
}

export default Login;
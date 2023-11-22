import React from 'react';
import AuthPage from '../AuthPage/AuthPage';

function Register() {
  return(
    <AuthPage title='Добро пожаловать!' buttonText='Зарегистрироваться' text='Уже зарегистрированы?' link='/signin' linkText='Войти'>
        <label for="name-input" className="auth-page__label">Имя</label>
        <input id="name-input" className="auth-page__input" placeholder="Имя" type="text"
        maxLength="40" minLength="2" required/>
        <div className="auth-page__line"></div>
        <span className="auth-page__field-error"></span>
    </AuthPage>
  )
}

export default Register;

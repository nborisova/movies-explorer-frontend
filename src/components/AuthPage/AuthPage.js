import React from "react";
import { Link } from 'react-router-dom';

function AuthPage({ title, children, buttonText, text, link, linkText }) {
  return(
        <div className="auth-page__container">
            <div className="auth-page__header">
              <div className="auth-page__logo"></div>
              <h2 className="auth-page__title">{title}</h2>
            </div>
            <form className="auth-page__container-form">
              <fieldset className="auth-page__fieldset">
                  {children}
                  <label for="email-input" className="auth-page__label">E-mail</label>
                  <input id="email-input" className="auth-page__input" type="email" 
                  maxLength="40" minLength="2" required/>
                  <div className="auth-page__line"></div>
                  <span className="auth-page__field-error"></span>
                  <label for="password-input" className="auth-page__label">Пароль</label>
                  <input id="password-input" className="auth-page__input" type="password" 
                  maxLength="200" minLength="2" required/>
                  <div className="auth-page__line"></div>
                  <span className="auth-page__field-error"></span>
              </fieldset>
              <button className="auth-page__submit-btn" type="submit">{buttonText}</button>
            </form>
            <div className="auth-page__text-group">
              <p className="auth-page__text">{text}</p>
              <Link to={link} className="auth-page__link">{linkText}</Link>
            </div>
        </div>
  )
}

export default AuthPage;
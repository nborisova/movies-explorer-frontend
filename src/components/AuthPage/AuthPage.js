import React from "react";
import { Link, NavLink } from 'react-router-dom';

function AuthPage({ title, children, buttonText, text, link, linkText, onChange, values, errors, isValid, onSubmit }) {
  return(
    <main className="auth-page">
      <div className="auth-page__container">
          <div className="auth-page__header">
            <NavLink to="/" className="auth-page__logo"/>
            <h1 className="auth-page__title">{title}</h1>
          </div>
          <form className="auth-page__container-form" onSubmit={onSubmit}>
            <fieldset className="auth-page__fieldset">
                {children}
                <label for="email-input" className="auth-page__label">E-mail</label>
                <input id="email-input" name="email" className="auth-page__input" placeholder="Email" type="email"
                maxLength="40" minLength="2" onChange={onChange} value={values.email} required/>
                <div className="auth-page__line"></div>
                <span className="auth-page__field-error">{errors.email}</span>
                <label for="password-input" className="auth-page__label">Пароль</label>
                <input id="password-input" name="password" className="auth-page__input" placeholder="Пароль" type="password"
                maxLength="200" minLength="2" onChange={onChange} value={values.password} required/>
                <div className="auth-page__line"></div>
                <span className="auth-page__field-error">{errors.password}</span>
            </fieldset>
            <span className="auth-page__form-error">{errors.form}</span>
            <button className="auth-page__submit-btn" type="submit" disabled={!isValid}>{buttonText}</button>
            <div className="auth-page__text-group">
              <p className="auth-page__text">{text}</p>
              <Link to={link} className="auth-page__link">{linkText}</Link>
            </div>
          </form>
        </div>
    </main>
  )
}

export default AuthPage;

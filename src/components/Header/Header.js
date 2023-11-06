import React from "react";
import logo from '../../images/header-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import iconProfile from '../../images/icon-profile.svg'

function Header() {
  const loggedIn = true;
  const navigate = useNavigate();

  function signIn() {
    navigate('/signin');
  }

    return (
      <header className="header">
        <div className="header__link-group">
          <img className="header__logo" src={logo} alt="Логотип проекта"/>
          {loggedIn ? <Link to="/movies" className="header__films">Фильмы</Link> : ""}
          {loggedIn ? <Link to="/saved-movies" className="header__films">Сохранённые фильмы</Link> : ""}
        </div>
        {
          loggedIn 
          ? <button className="header__profile-group">
              <img className="header__icon-profile" src={iconProfile} alt="Иконка профиля"/>
              <Link to="/profile" className="header__user-profile">Аккаунт</Link>
            </button> 
          : <div className="header__auth-group">
              <Link to="/signup" className="header__signup">Регистрация</Link>
              <button onClick={signIn} className="header__signin">Войти</button>
            </div>
        }
      </header>
    )
}

export default Header;
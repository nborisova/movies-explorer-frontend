import React from "react";
import logo from '../../images/header-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import iconProfile from '../../images/icon-profile.svg'

function Navigation() {
  const loggedIn = false;
  const navigate = useNavigate();

  function signIn() {
    navigate('/signin');
  }

    return (
      <nav className="navigation">
        <img className="navigation__logo" src={logo} alt="Логотип проекта"/>
        {
          loggedIn
          ?
          <>
            <div className="navigation__link-group">
              <div className="navigation__link-films">
                <Link to="/movies" className="navigation__films">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__films">Сохранённые фильмы</Link>
              </div>
              <button className="navigation__profile-group">
                <img className="navigation__icon-profile" src={iconProfile} alt="Иконка профиля"/>
                <Link to="/profile" className="navigation__user-profile">Аккаунт</Link>
              </button>
            </div>
            <button className="navigation___btn" type="button"></button>
          </>
          : <div className="navigation__auth-group">
              <Link to="/signup" className="navigation__signup">Регистрация</Link>
              <button onClick={signIn} className="navigation__signin">Войти</button>
            </div>
        }
      </nav>
    )
}

export default Navigation;

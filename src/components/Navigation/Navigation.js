import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import iconProfile from '../../images/icon-profile.svg'

function Navigation() {
  const loggedIn = false;
  const navigate = useNavigate();

  function signIn() {
    navigate('/signin');
  }

  const linkClassName = ({isActive}) => isActive ? "navigation__films navigation__films_active" : "navigation__films";

    return (
      <nav className="navigation">
        <NavLink to="/" className="navigation__logo" />
        {
          loggedIn
          ?
          <>
            <div className="navigation__link-group">
              <div className="navigation__link-films">
                <div className="navigation__close-btn navigation__visible-el"></div>
                <NavLink to="/" className={({isActive}) => isActive ? "navigation__films navigation__films_active navigation__visible-el"
                : "navigation__films navigation__visible-el"}>Главная</NavLink>
                <NavLink to="/movies" className={linkClassName}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={linkClassName}>Сохранённые фильмы</NavLink>
              </div>
              <button className="navigation__profile-group">
                <img className="navigation__icon-profile" src={iconProfile} alt="Иконка профиля"/>
                <NavLink to="/profile" className="navigation__user-profile">Аккаунт</NavLink>
              </button>
            </div>
            <button className="navigation___btn" type="button"></button>
          </>
          : <div className="navigation__auth-group">
              <NavLink to="/signup" className="navigation__signup">Регистрация</NavLink>
              <button onClick={signIn} className="navigation__signin">Войти</button>
            </div>
        }
      </nav>
    )
}

export default Navigation;

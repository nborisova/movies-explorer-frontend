import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import iconProfile from '../../images/icon-profile.svg'

function Navigation() {
  const loggedIn = true;
  const navigate = useNavigate();

  function signIn() {
    navigate('/signin');
  }

  const [isMenuVisible, setMenuVisible] = React.useState(false);
  const showMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const linkClassName = ({isActive}) => isActive ? "navigation__films navigation__films_active" : "navigation__films";

    return (
      <nav className="navigation">
        <NavLink to="/" className="navigation__logo"/>
        {
          loggedIn
          ?
          <>
            <div className={`navigation__link-group ${isMenuVisible ? "navigation-visible" : ""}`}>
              <div className="navigation__link-films">
                <button className="navigation__close-btn" onClick={closeMenu}></button>
                <NavLink to="/" className={({isActive}) => isActive ? "navigation__films navigation__films_active navigation-visible"
                : "navigation__films navigation-visible"}>Главная</NavLink>
                <NavLink to="/movies" className={linkClassName}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={linkClassName}>Сохранённые фильмы</NavLink>
              </div>
              <NavLink to="/profile" className="navigation__profile-group">
                <img className="navigation__icon-profile" src={iconProfile} alt="Иконка профиля"/>
                <p className="navigation__user-profile">Аккаунт</p>
              </NavLink>
            </div>
            <button className="navigation__btn" type="button" onClick={showMenu}></button>
          </>
          : <nav className="navigation__auth-group">
              <NavLink to="/signup" className="navigation__signup">Регистрация</NavLink>
              <button onClick={signIn} className="navigation__signin" type="button">Войти</button>
            </nav>
        }
      </nav>
    )
}

export default Navigation;

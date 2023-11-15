import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
        <Header />
        <section className="profile">
            <h2 className="profile__header">Привет, Виталий!</h2>
            <div className="profile__name-data">
                <p className="profile__name">Имя</p>
                <p className="profile__user-name">Виталий</p>
            </div>    
            <div className="profile__line"></div>
            <div className="profile__email-data">
                <p className="profile__email">E-mail</p>
                <p className="profile__user-email">pochta@yandex.ru</p>
            </div>
            <div className="profile__link">
                <Link to="/" className="profile__edit">Редактировать</Link>
                <Link to="/" className="profile__logout">Выйти из аккаунта</Link>
            </div>
        </section>
    </>
  );
}

export default Profile;
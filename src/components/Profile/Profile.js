import React from 'react';
import Header from '../Header/Header';

function Profile() {

  const [isEdit, setEdit] = React.useState(true);
  const editProfile = () => setEdit(true);
  const cancelEditProfile = () => setEdit(false);

  return (
    <>
        <Header />
        <main className="profile">
            <h1 className="profile__header">Привет, Виталий!</h1>
            {
              isEdit
              ?
              <form className="profile__container-form">
              <fieldset className="profile__fieldset">
                  <label for="name-input" className="profile__label">Имя</label>
                  <input id="name-input" className="profile__input" type="text"
                  maxLength="40" minLength="2" required/>
                  <span className="profile__field-error"></span>
                  <label for="email-input" className="profile__label">E-mail</label>
                  <input id="email-input" className="profile__input" type="email"
                  maxLength="40" minLength="2" required/>
                  <span className="profile__field-error"></span>
              </fieldset>
              <button className="profile__submit-btn" type="submit">Сохранить</button>
              <button className="profile__submit-btn" type="submit" onClick={cancelEditProfile}>Отмена</button>
              </form>
              :
              <>
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
                  <button className="profile__edit" type="button" onClick={editProfile}>Редактировать</button>
                  <button className="profile__logout" type="button">Выйти из аккаунта</button>
                </div>
              </>
            }
        </main>
    </>
  );
}

export default Profile;

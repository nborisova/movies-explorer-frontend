import React from 'react';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ mainApi, onUserUpdate, onSignOut }) {
  const navigate = useNavigate();
  const [isEdit, setEdit] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const [values, setValues] = React.useState({
    email: '',
    name: '',
  });
  const [errors, setErrors] = React.useState({
    email: '',
    name: '',
    form: '',
  });
  const [isValid, setIsValid] = React.useState(false);
  const[isUpdated, setIsUpdated] = React.useState(false);

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    });
  }, [currentUser]);

  const editProfile = () => {
    setIsUpdated(false);
    setEdit(true);
  };
  const cancelEditProfile = () => setEdit(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    const newValues = { ...values, [name]: value };
    const isChanged = currentUser.name !== newValues.name || currentUser.email !== newValues.email;
    setValues(newValues);
    setErrors({ ...errors, [name]: e.target.validationMessage ? `${e.target.validationMessage} ${e.target.title}` : '' });
    setIsValid(e.target.closest('form').checkValidity() && isChanged);
  }

  function handleSubmit(e) {
    e.preventDefault();

    mainApi.editProfile(values)
    .then(onUserUpdate)
    .then(() => {
      setIsUpdated(true);
      cancelEditProfile();
    })
    .catch(err => setErrors({...errors, form: 'При изменении данных произошла ошибка.' }));
  }

  function signOut() {
    localStorage.clear();
    navigate('/');
    onSignOut();
  }

  return (
    <>
        <Header />
        <main className="profile">
            <h1 className="profile__header">Привет, {currentUser.name}!</h1>
            {
              isEdit
              ?
              <form className="profile__container-form" onSubmit={handleSubmit}>
              <fieldset className="profile__fieldset">
                  <label for="name-input" className="profile__label">Имя</label>
                  <input id="name-input" name="name" className="profile__input" placeholder="Имя" type="text" pattern="[a-zA-Zа-яА-Я\- ]+"
                  maxLength="40" minLength="2" value={values.name} onChange={handleChange} required/>
                  <span className="profile__field-error">{errors.name}</span>
                  <label for="email-input" className="profile__label">E-mail</label>
                  <input id="email-input" name="email" className="profile__input" placeholder="Email" type="email"
                  maxLength="40" minLength="2" value={values.email} onChange={handleChange} required/>
                  <span className="profile__field-error">{errors.email}</span>
              </fieldset>
              <span className="profile__form-error">{errors.form}</span>
              <button className="profile__submit-btn" type="submit" disabled={!isValid}>Сохранить</button>
              <button className="profile__submit-btn" type="submit" onClick={cancelEditProfile}>Отмена</button>
              </form>
              :
              <>
                <div className="profile__name-data">
                  <p className="profile__name">Имя</p>
                  <p className="profile__user-name">{currentUser.name}</p>
                </div>
                <div className="profile__line"></div>
                <div className="profile__email-data">
                  <p className="profile__email">E-mail</p>
                  <p className="profile__user-email">{currentUser.email}</p>
                </div>
                <div className="profile__link">
                  {
                    isUpdated
                    ? <span className="profile__success-msg">Данные профиля успешно сохранены</span>
                    : ''
                  }
                  <button className="profile__edit" type="button" onClick={editProfile}>Редактировать</button>
                  <button className="profile__logout" type="button" onClick={signOut}>Выйти из аккаунта</button>
                </div>
              </>
            }
        </main>
    </>
  );
}

export default Profile;

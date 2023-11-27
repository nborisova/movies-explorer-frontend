import React from 'react';
import AuthPage from '../AuthPage/AuthPage';

function Register({ mainApi, onLogin }) {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    name: '',
  });
  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
    name: '',
    form: '',
  });
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage ? `${e.target.validationMessage} ${e.target.title}` : '' });
    setIsValid(e.target.closest('form').checkValidity());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    mainApi.register(values)
    .then(() => {
      mainApi.login(values)
      .then(onLogin)
      .catch(err => setErrors({...errors, form: 'При регистрации произошла ошибка.' }));
    })
    .catch(err => setErrors({...errors, form: 'При регистрации произошла ошибка.' }));
  }

  return(
    <AuthPage title='Добро пожаловать!' buttonText='Зарегистрироваться' text='Уже зарегистрированы?' values={values} onSubmit={handleSubmit}
      onChange={handleChange} errors={errors} isValid={isValid} link='/signin' linkText='Войти'>
        <label for="name-input" className="auth-page__label">Имя</label>
        <input id="name-input" name="name" className="auth-page__input" placeholder="Имя" type="text"
        maxLength="40" minLength="2" value={values.name} onChange={handleChange} pattern="[a-zA-Zа-яА-Я\- ]+" title="Латиница, кириллица, пробел или дефис" required/>
        <div className="auth-page__line"></div>
        <span className="auth-page__field-error">{errors.name}</span>
    </AuthPage>
  )
}

export default Register;

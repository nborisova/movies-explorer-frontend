import React from 'react';
import AuthPage from '../AuthPage/AuthPage';
import validator from 'validator';

function Login({ mainApi, onLogin }) {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
    form: '',
  });
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    if (name === 'email') {
      const validationMessage = validator.isEmail(value) ? '' : 'Некорректный email';
      e.target.setCustomValidity(validationMessage);
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage ?  `${e.target.validationMessage} ${e.target.title}` : '' });
    setIsValid(e.target.closest('form').checkValidity());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    mainApi.login(values)
    .then(onLogin)
    .catch(err => setErrors({...errors, form: 'При авторизации произошла ошибка.' }));

  }

  return(
    <AuthPage title='Рады видеть!' buttonText='Войти' text='Ещё не зарегистрированы?' link='/signup' linkText='Регистрация'
      values={values} onSubmit={handleSubmit} onChange={handleChange} errors={errors} isValid={isValid}/>
  )
}

export default Login;

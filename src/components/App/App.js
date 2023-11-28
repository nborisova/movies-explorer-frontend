import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { MainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const navigate = useNavigate();

  let mainApi = initMainApi();

  function initMainApi() {
    return new MainApi({
      // baseUrl: 'https://api.movies-nb.nomoredomainsrocks.ru',
      baseUrl: 'http://localhost:4000',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    });
  }

  React.useEffect(() => {
    mainApi.getCurrentUser()
    .then(setCurrentUser)
    .catch(err => console.error(err));

    mainApi.getSavedMovies()
    .then(setSavedMovies)
    .catch(err => console.error(err));

  }, [])

  function handleLogin({ token }) {
    localStorage.setItem('token', token);
    mainApi = initMainApi();
    mainApi.getCurrentUser()
    .then(setCurrentUser)
    .then(() => navigate('/movies'))
    .catch(err => console.error(err));
  }

  function saveMovie(movie) {
    mainApi.saveMovie(movie)
    .then(newMovie => setSavedMovies([...savedMovies, newMovie]))
    .catch(err => console.error(err));
  }

  function deleteMovie(movie) {
    mainApi.deleteSavedMovie(movie.movieId)
    .then(() => {
      const filteredMovies = savedMovies.filter((item) => item.movieId !== movie.movieId);
      setSavedMovies(filteredMovies);
    })
    .catch(err => console.error(err));
  }

  function handleUserUpdate(newUserData) {
    setCurrentUser(newUserData);
  }

  function handleSignOut() {
    setCurrentUser({});
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies onSaveMovie={saveMovie} onDeleteMovie={deleteMovie} savedMovies={savedMovies}/>} />
          <Route path="/saved-movies" element={<SavedMovies savedMovies={savedMovies} onDeleteMovie={deleteMovie}/>} />
          <Route path="/signup" element={<Register mainApi={mainApi} onLogin={handleLogin}/>} />
          <Route path="/signin" element={<Login mainApi={mainApi} onLogin={handleLogin}/>} />
          <Route path="/profile" element={<Profile mainApi={mainApi} onUserUpdate={handleUserUpdate} onSignOut={handleSignOut}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

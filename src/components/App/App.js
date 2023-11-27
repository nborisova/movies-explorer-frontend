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
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});

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
    .then(newMovie => setSavedMovies([newMovie, ...savedMovies]))
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

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies onSaveMovie={saveMovie} onDeleteMovie={deleteMovie}/>} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signup" element={<Register mainApi={mainApi} onLogin={handleLogin}/>} />
          <Route path="/signin" element={<Login mainApi={mainApi} onLogin={handleLogin}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

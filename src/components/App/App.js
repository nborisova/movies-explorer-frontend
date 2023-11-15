import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies'; 
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader';
import Profile from '../Profile/Profile';
import AuthPage from '../AuthPage/AuthPage';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="App">
       {/* <Header />
       <SearchForm />
       <MoviesCardList />
       <Footer />
       <Preloader />

      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />  */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

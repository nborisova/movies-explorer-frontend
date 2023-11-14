import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import cardImg from '../../images/card-image.svg';

function SavedMovies() {

    const movies = Array(3).fill({
        'img': cardImg,
        'name': '33 слова о дизайне',
        'duration': '1ч42м',
    });

  return (
    <div>
      <Header />
      <SearchForm />
      <MoviesCardList movies={movies} hasMore={false}  />
      <Footer />
    </div>
  );
}

export default SavedMovies;
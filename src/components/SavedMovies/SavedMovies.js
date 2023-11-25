import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import cardImg from '../../images/card-image.png';

function SavedMovies() {

    const movies = Array(3).fill({
        'image': {'url': cardImg},
        'nameRU': '33 слова о дизайне',
        'duration': 102,
    });

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList movies={movies} hasMore={false}  />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

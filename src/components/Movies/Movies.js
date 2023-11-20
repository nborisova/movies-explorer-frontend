import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import cardImg from '../../images/card-image.svg';

function Movies() {

    const movies = Array(16).fill({
        'img': cardImg,
        'name': '33 слова о дизайне',
        'duration': '1ч42м',
    });

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList movies={movies} hasMore={true} />
      </main>
      <Footer />
      {/* <Preloader /> */}
    </>
  );
}

export default Movies;

import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { filterMovies } from '../../utils/MovieUtils';

function SavedMovies({ savedMovies, onDeleteMovie }) {
  const [text, setText] = React.useState('');
  const [isShortMovie, setShortMovie] = React.useState(false);
  const [visibleMovies, setVisibleMovies] = React.useState();

  const movies = visibleMovies ?? savedMovies;

  function search({ text, isShortMovie }) {
    const filteredMovies = filterMovies(savedMovies, { text, isShortMovie });
    setVisibleMovies(filteredMovies);
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm search={search} text={text} setText={setText} isShortMovie={isShortMovie} setShortMovie={setShortMovie}/>
        {
          movies.length > 0
          ? <MoviesCardList movies={movies} hasMore={false} onDeleteMovie={onDeleteMovie}/>
          : <div>Ничего не найдено</div>
        }
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

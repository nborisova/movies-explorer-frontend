import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import cardImg from '../../images/card-image.png';
import { MoviesApi } from '../../utils/MoviesApi';

const moviesApi = new MoviesApi();

function Movies() {
  console.log(window.innerWidth)

  const [allMovies, setAllMovies] = React.useState([]);
  const [visibleMovies, setVisibleMovies] = React.useState([]);
  const [loadStatus, setLoadStatus] = React.useState('ok');
  const [errorText, setErrorText] = React.useState('');
  const [initialPageSize, setInitialPageSize] = React.useState(16);
  const [pageSize, setPageSize] = React.useState(4);

  function calculatePageSize() {
    if (window.innerWidth >= 1280) {
      setInitialPageSize(16);
      setPageSize(4);
    } else if (window.innerWidth >= 1005) {
      setInitialPageSize(12);
      setPageSize(3);
    } else if (window.innerWidth >= 768) {
      setInitialPageSize(8);
      setPageSize(2);
    } else {
      setInitialPageSize(5);
      setPageSize(2);
    }
  }

  React.useEffect(() => {

    calculatePageSize();

    let resizeTimeout;

    window.addEventListener('resize', function(event) {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        calculatePageSize();
      }, 100);
    });
  }, []);

  React.useEffect(() => {
    if (visibleMovies.length !== 0 && visibleMovies.length < initialPageSize) {
      setVisibleMovies(allMovies.slice(0, initialPageSize));
    } else if (visibleMovies.length % pageSize !== 0 && initialPageSize !== 5) {
      const rowsCount = Math.ceil(visibleMovies.length / pageSize);
      setVisibleMovies(allMovies.slice(0, rowsCount * pageSize));
    }
  }, [pageSize, initialPageSize, visibleMovies, allMovies]);

  //TODO получать фильмы с сервера только 1 раз
  function search({ text, isShortMovie }) {
    setLoadStatus('loading');
    const lowerText = text.toLowerCase()

    // Получение фильмов с сервера
    moviesApi.getMovies()
    // Фильтрация фильмов
    .then(movies => movies.filter((movie) => {
      if (isShortMovie && movie.duration > 40) {
        return false;
      }
      if(!movie.nameRU.toLowerCase().includes(lowerText) && !movie.nameEN.toLowerCase().includes(lowerText)) {
        return false;
      }
      return true;
    }))
    // Обновление блока с фильмами (или блока ошибки)
    .then(movies => {
      if (movies.length > 0) {
        setLoadStatus('ok');
      } else {
        setErrorText('Ничего не найдено');
        setLoadStatus('error');
      }
      return movies;
    })
    // Сохраняем все фильмы
    .then(movies => {
      setAllMovies(movies);
      return movies;
    })
    // Показываем первую страницу с фильмами
    .then(movies => setVisibleMovies(movies.slice(0, initialPageSize)))
    // Обработка ошибок
    .catch(err => {
      console.log(err);
      setErrorText(
        `Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз`
      );
      setLoadStatus('error');
    });
  }

  function loadMore() {
    setVisibleMovies(allMovies.slice(0, visibleMovies.length + pageSize));
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm search={search}/>
        { loadStatus === 'ok' ? <MoviesCardList
          movies={visibleMovies}
          hasMore={allMovies.length > visibleMovies.length}
          loadMore={loadMore}
        /> : '' }
        { loadStatus === 'loading' ? <Preloader /> : '' }
        { loadStatus === 'error' ? <div>{errorText}</div> : '' }
      </main>
      <Footer />
    </>
  );
}

export default Movies;

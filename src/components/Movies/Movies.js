import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { MoviesApi } from '../../utils/MoviesApi';

const moviesApi = new MoviesApi();

function Movies({ onSaveMovie, onDeleteMovie }) {
  const [allMovies, setAllMovies] = React.useState([]);
  const [visibleMovies, setVisibleMovies] = React.useState([]);
  const [loadStatus, setLoadStatus] = React.useState('ok');
  const [errorText, setErrorText] = React.useState('');
  const [initialPageSize, setInitialPageSize] = React.useState(16);
  const [pageSize, setPageSize] = React.useState(4);
  const [text, setText] = React.useState('');
  const [isShortMovie, setShortMovie] = React.useState(false);

  // Отдает массив из 2х элементов: [начальный размер страницы, размер ряда]
  function getPageSize() {
    if (window.innerWidth >= 1280) {
      return [16, 4];
    } else if (window.innerWidth >= 1005) {
      return [12, 3];
    } else if (window.innerWidth >= 744) {
      return [8, 2];
    } else {
      return [5, 2];
    }
  }

  React.useEffect(() => {
    function calculatePageSize() {
      const [initialSize, size] = getPageSize();
      setInitialPageSize(initialSize);
      setPageSize(size);
    }

    let localStorageMovies = localStorage.getItem('movies');
    if (localStorageMovies) {
      localStorageMovies = JSON.parse(localStorageMovies);
      setAllMovies(localStorageMovies);
      setVisibleMovies(localStorageMovies.slice(0, getPageSize()[0]));
    }

    const localStorageText = localStorage.getItem('text');
    if (localStorageText) {
      setText(localStorageText);
    }

    let localStorageShortMovie = localStorage.getItem('isShortMovie');
    if (localStorageShortMovie) {
      localStorageShortMovie = JSON.parse(localStorageShortMovie);
      setShortMovie(localStorageShortMovie);
    }

    const localStorageStatus = localStorage.getItem('loadStatus');
    if (localStorageStatus) {
      setLoadStatus(localStorageStatus);
    }

    const localStorageErrorText = localStorage.getItem('errorText');
    if (localStorageErrorText) {
      setErrorText(localStorageErrorText);
    }

    calculatePageSize();

    let resizeTimeout;

    window.addEventListener('resize', function(event) {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        calculatePageSize();
      }, 100);
    });
  }, []);

  // дорисовывает ряд до конца
  React.useEffect(() => {
    if (visibleMovies.length === allMovies.length) {
      return;
    }
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
    // меняем объект от сервера на формат нашего бэкенда
    .then(movies => movies.map(({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN,
    }) => {
      return {
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN,
      };
    }))
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
        localStorage.setItem('loadStatus', 'ok');
      } else {
        setErrorText('Ничего не найдено');
        setLoadStatus('error');
        localStorage.setItem('loadStatus', 'error');
        localStorage.setItem('errorText', 'Ничего не найдено')
      }
      return movies;
    })
    // Сохраняем все фильмы
    .then(movies => {
      setAllMovies(movies);
      localStorage.setItem('movies', JSON.stringify(movies));
      localStorage.setItem('text', text);
      localStorage.setItem('isShortMovie', isShortMovie);
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
        <SearchForm search={search} text={text} setText={setText} isShortMovie={isShortMovie} setShortMovie={setShortMovie}/>
        { loadStatus === 'ok' ? <MoviesCardList
          movies={visibleMovies}
          hasMore={allMovies.length > visibleMovies.length}
          loadMore={loadMore}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        /> : '' }
        { loadStatus === 'loading' ? <Preloader /> : '' }
        { loadStatus === 'error' ? <div>{errorText}</div> : '' }
      </main>
      <Footer />
    </>
  );
}

export default Movies;

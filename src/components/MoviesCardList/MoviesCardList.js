import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';

function MoviesCardList({ movies, hasMore, loadMore, onSaveMovie, onDeleteMovie }) {
  return (
    <section className='movie-cards'>
        <ul className="movie-cards__container">
            {movies.map(movie => <MoviesCard movie={movie} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie}/>)}
        </ul>
        { hasMore ? <More loadMore={loadMore} /> : '' }
    </section>
  );
}

export default MoviesCardList;

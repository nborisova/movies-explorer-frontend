import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';

function MoviesCardList({ movies, hasMore }) {
  return (
    <section className='movie-cards'>
        <ul className="movie-cards__container">
            {movies.map(movie => <MoviesCard img={movie.img} name={movie.name} duaration={movie.duration} />)}
        </ul>
        { hasMore ? <More /> : '' }
    </section>
  );
}

export default MoviesCardList;

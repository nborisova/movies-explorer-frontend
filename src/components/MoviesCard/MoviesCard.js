import React from 'react';

function MoviesCard({ movie, onSaveMovie, onDeleteMovie }) {
  const [isSaved, setSave] = React.useState(false);

  function saveMovie() {
    setSave(!isSaved);
    if (!isSaved) {
      onSaveMovie(movie);
    } else {
      onDeleteMovie(movie);
    }
  }

  function calculateTime({ movie } ) {
    const min = movie.duration % 60;
    const hours = (movie.duration - min)/60;
    let finalTime = '';
    if(hours !== 0) {
      finalTime += (hours < 10 ? '0' : '' ) + hours.toString() + 'ч';
    }
    finalTime += (min < 10 ? '0' : '') + min.toString() + 'м';

    return finalTime;
  }

  return (
    <li className="movie-card">
        <article className="movie-card__element">
            <a href={movie.trailerLink} target="_blank" rel="noreferrer">
              <img className="movie-card__image" src={movie.image} alt={movie.nameRU}/>
            </a>
            <div className="movie-card__group">
                <div className="movie-card__description-group">
                    <h2 className="movie-card__name">{movie.nameRU}</h2>
                    <div className="movie-card__duration">{calculateTime({ movie })}</div>
                </div>
                <button className={`movie-card__saved-btn ${isSaved ? "movie-card__saved-btn_on" : ""}`}
                  type="button" onClick={saveMovie}></button>
            </div>
        </article>
    </li>
  );
}

export default MoviesCard;

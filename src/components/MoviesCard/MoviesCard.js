import React from 'react';

function MoviesCard({ movie }) {
  const [save, setSave] = React.useState(false);

  function saveMovie() {
    setSave(true)
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
            <img className="movie-card__image" src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU}/>
            <div className="movie-card__group">
                <div className="movie-card__description-group">
                    <h2 className="movie-card__name">{movie.nameRU}</h2>
                    <div className="movie-card__duration">{calculateTime({ movie })}</div>
                </div>
                <button className={`movie-card__saved-btn ${save ? "movie-card__saved-btn_on" : ""}`}
                  type="button" onClick={saveMovie}></button>
            </div>
        </article>
    </li>
  );
}

export default MoviesCard;

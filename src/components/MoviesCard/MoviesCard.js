import React from 'react';

function MoviesCard({ img, name, duaration }) {
    const isSaved = false;

  return (
    <li className="movie-card">
        <article className="movie-card__element">
            <img className="movie-card__image" src={img} alt={name}/>
            <div className="movie-card__group">
                <div className="movie-card__description-group">
                    <h2 className="movie-card__name">{name}</h2>
                    <div className="movie-card__duaration">{duaration}</div>
                </div>
                <button className={`movie-card__saved-btn ${isSaved ? "movie-card__saved-btn_on" : ""}`} type="button"></button>
            </div>
        </article>
    </li>
  );
}

export default MoviesCard;

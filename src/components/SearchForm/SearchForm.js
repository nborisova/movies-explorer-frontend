import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
  return (
    <section className="search-form__container">
        <form className="search-form" name="search-form">
            <div className="search-form__area">
                <div className="search-form__input-icon"></div>
                <input className="search-form__input" type="search" placeholder="Фильм" required></input>
            </div>
            <fieldset className="search-form__buttons">
                <input className="search-form__submit-buttons" type="submit" value=""></input>
                <div className="search-form__line"></div>
                <FilterCheckbox />
                <p className="search-form__text">Короткометражки</p>
            </fieldset>
        </form>
        <div className="search-form__line-horizontal"></div>
    </section>
  );
}

export default SearchForm;
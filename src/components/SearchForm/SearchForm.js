import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({ search, text, setText, isShortMovie, setShortMovie }) {
  const textInputRef = React.useRef();
  const [textError, setTextError] = React.useState('');

  function validateText() {
    if (!textInputRef.current.value) {
      setTextError('Нужно ввести ключевое слово');
      return false;
    } else {
      setTextError('');
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateText()) {
      return;
    }

    search({ text, isShortMovie });
  }

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function handleChangeShortMovie(isChecked) {
    setShortMovie(isChecked);
    search({ text, isShortMovie: isChecked });
  }

  return (
    <section className="search-section">
        <form className="search-form" name="search-form" onSubmit={handleSubmit} noValidate>
            <div className="search-form__area">
              <div className="search-form__area-block">
                <div className="search-form__input-icon"></div>
                <input ref={textInputRef} className="search-form__input" type="search" placeholder="Фильм" onChange={handleChangeText}
                value={text ?? ''} required />
              </div>
              <div className="search-form__area-block">
                <button className="search-form__submit-buttons" type="submit" value=""></button>
                <div className="search-form__line"></div>
              </div>
            </div>
            <fieldset className="search-form__checkbox">
                <FilterCheckbox isChecked={isShortMovie} setIsChecked={handleChangeShortMovie} />
                <p className="search-form__text">Короткометражки</p>
            </fieldset>
        </form>
        <span className="search-form__error">{textError}</span>
        <div className="search-section__line-horizontal"></div>
    </section>
  );
}

export default SearchForm;

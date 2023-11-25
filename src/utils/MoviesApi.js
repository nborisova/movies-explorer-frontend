export class MoviesApi {
  constructor() {
    this._baseUrl =  'https://api.nomoreparties.co';
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    } else {
      console.log('Res ne ok');
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`,)
    .then(this._checkResponse);
  }
}

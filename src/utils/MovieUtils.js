export const filterMovies = (movies, { text, isShortMovie }) => {
  const lowerText = text.toLowerCase()

  return movies.filter((movie) => {
    if (isShortMovie && movie.duration > 40) {
      return false;
    }
    if(!movie.nameRU.toLowerCase().includes(lowerText) && !movie.nameEN.toLowerCase().includes(lowerText)) {
      return false;
    }
    return true;
  });
}

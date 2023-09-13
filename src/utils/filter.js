export const filterMovies = (movies, query, isShortMovieChecked) => {
  const regex = new RegExp(query, "i");

  const filteredMovies = movies.filter((movie) => {
    const nameRU = movie.nameRU;
    const nameEN = movie.nameEN;
    const duration = movie.duration;

    const isMatch = regex.test(nameRU) || regex.test(nameEN);
    const isShortMovie = isShortMovieChecked ? duration <= 40 : true;

    return isMatch && isShortMovie;
  });

  return filteredMovies;
}
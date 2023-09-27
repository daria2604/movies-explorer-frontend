const calculateHours = (movie) => {
  if (Math.floor(movie.duration / 60) === 0) {
    return "";
  } else {
    return `${Math.floor(movie.duration / 60)}ч`;
  }
};

const calculateMinutes = (movie) => {
  if (movie.duration % 60 === 0) {
    return "";
  } else {
    return `${movie.duration % 60}м`;
  }
};

const caluculateMovieDuration = (movie) => {
  return calculateHours(movie) + " " + calculateMinutes(movie);
};

export default caluculateMovieDuration;

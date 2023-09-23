class MainApi {
  #baseUrl;
  #headers;

  constructor(options) {
    this.#baseUrl = options.baseUrl;
    this.#headers = options.headers;
  }

  #checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res.status);
  }

  #request(endpoint, options) {
    return fetch(this.#baseUrl + endpoint, options).then(this.#checkResponse);
  }

  register({ name, email, password }) {
    return this.#request("/signup", {
      method: "POST",
      headers: this.#headers,
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });
  }

  login({ email, password }) {
    return this.#request("/signin", {
      method: "POST",
      headers: this.#headers,
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }).then((data) => {
      if (data._id) {
        localStorage.setItem("token", data._id);
        return data;
      }
    });
  }

  getToken() {
    return this.#request("/users/me", {
      method: "GET",
      headers: this.#headers,
      credentials: "include",
    });
  }

  logout() {
    return this.#request("/signout", {
      method: "POST",
      headers: this.#headers,
      credentials: "include",
    });
  }

  getSavedMovies() {
    return this.#request("/movies", {
      headers: this.#headers,
      credentials: "include",
    });
  }

  getUserInfo() {
    return this.#request("/users/me", {
      headers: this.#headers,
      credentials: "include",
    });
  }

  updateUserInfo({ name, email }) {
    return this.#request("/users/me", {
      method: "PATCH",
      headers: this.#headers,
      credentials: "include",
      body: JSON.stringify({ name, email }),
    });
  }

  deleteMovie(movieId) {
    return this.#request("/movies/" + movieId, {
      method: "DELETE",
      headers: this.#headers,
      credentials: "include",
    });
  }

  saveMovie(data) {
    return this.#request("/movies", {
      method: "POST",
      headers: this.#headers,
      credentials: "include",
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      }),
    });
  }
}

const mainApi = new MainApi({
  // baseUrl: "http://localhost:4000",
  baseUrl: "https://api.movies.dvr.nomoredomainsicu.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;

export default class PopularMovieFromServer {
  constructor() {
    this.currentPage = 1;
  }

  getPopularMovieFromServer() {
    const API_KEY = '197007a676a4d3e84c6bdb6f21b18a1a';
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${this.page}&language=uk`
    ).then(response => response.json());
  }

  getSubmitMovieFromServer(filmName) {
    const API_KEY = '197007a676a4d3e84c6bdb6f21b18a1a';
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${this.page}&query=${filmName}`
    ).then(response => response.json());
  }

  get page() {
    return this.currentPage;
  }

  set page(pageNumber) {
    this.currentPage = pageNumber;
  }
}

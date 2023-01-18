export class PopularMovieFromServer {
  constructor() {
    this.currentPage = 1;
    this.searchQuery = '';
  }

  getPopularMovieFromServer() {
    const API_KEY = '197007a676a4d3e84c6bdb6f21b18a1a';
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${this.page}`
    ).then(response => response.json());
  }

  getSubmitMovieFromServer() {
    const API_KEY = '197007a676a4d3e84c6bdb6f21b18a1a';
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${this.page}&query=${this.searchQuery}&include_adult=false`
    ).then(response => response.json());
  }

  get page() {
    return this.currentPage;
  }

  set page(pageNumber) {
    this.currentPage = pageNumber;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

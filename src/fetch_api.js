const FETCH_HTTP = 'https://api.themoviedb.org/3';
const API_KEYS = 'bcde96d2248e63a51f520e697b2ad108';

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
export async function getFetchedById(id) {
  const getFetch = await fetch(
    `${FETCH_HTTP}/movie/${id.toString()}?api_key=${API_KEYS}&language=en-US`
  );
  const card = await getFetch.json();

  return card;
}

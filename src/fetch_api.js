
export default class MovieFromServer {
  constructor () {
    this.currentPage  = 1;
  }

  getPopularMovieFromServer() {
    const API_KEY = '197007a676a4d3e84c6bdb6f21b18a1a';
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${this.page}&language=uk`)
    .then(response => response.json()).catch(console.log)
  }

  get page() {
    return this.currentPage ;
  }

  set page(pageNumber) {
    this.currentPage  = pageNumber;
  }
}

import {PopularMovieFromServer} from '../../fetch_api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {addMurkupOnPage, paginationOptions} from '../../popularMovies';
import Pagination from 'tui-pagination';

const popularMovieFromServer = new PopularMovieFromServer();


const formEl = document.querySelector('.home_header-form');
const searchBtn = document.querySelector('.home_header-btn');
const mainListRef = document.querySelector('.film-list');
const paginationBox = document.querySelector('#pagination');

formEl.addEventListener('submit', searchFilm);

async function searchFilm(e) {
  e.preventDefault();
  paginationBox.innerHTML = '';
  let searchMovieValue = e.target.elements.query.value;

  if (!Boolean(searchMovieValue.trim())) {
    searchBtn.style.visibility = 'visible';
    Notify.warning('Enter the name of movie.');
    return;
  }
  
  addSearchingMovieToPage(searchMovieValue);
  paginationForSearchFetch();
}

// Пагинация для поиска
async function paginationForSearchFetch() {
  const totalPages = await popularMovieFromServer.getSubmitMovieFromServer().then(data => {
    // console.log(data);
    return data.total_pages;
  });
  const options = paginationOptions(totalPages);
  const searchPagination = new Pagination('pagination', options);
  
  searchPagination.on('beforeMove', (evt) => {
    const currentPage = evt.page;
    addSearchingMovieToPage(popularMovieFromServer.query, currentPage)
  })
}

// Функция ожидает значение из строки поиска и номер страницы и рендерит разметку
async function addSearchingMovieToPage(value, searchPage) {
  popularMovieFromServer.page = searchPage;
  popularMovieFromServer.query = value;
  const searchingMovieData = await popularMovieFromServer.getSubmitMovieFromServer().then(data => {
    return data;
  });

  if (searchingMovieData.total_results == 0) {
    Notify.warning('Sorry! We did not find this movie.');
    return;
  }
  mainListRef.innerHTML = '';

  addMurkupOnPage(searchingMovieData.results)
}


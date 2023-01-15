import PopularMovieFromServer from './feach-api';
const PopularMovieFromServer = new PopularMovieFromServer();

const formEl = document.querySelector('.home_header-form');
const searchBtn = document.querySelector('.home_header-btn');
const sectionEl = document.querySelector('.film-card-section');

formEl.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
  e.preventDefault();

  const inputValue = e.currentTarget.elements.query.value;
  
   PopularMovieFromServer.getPopularMovieFromServer(inputValue);
  
  if (inputValue === '') {
    sectionEl.innerHTML = '';
    searchBtn.style.visibility = 'visible';
  };
}



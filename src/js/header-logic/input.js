import PopularMovieFromServer from '../../fetch_api';
const popularMovieFromServer = new PopularMovieFromServer();
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.home_header-form');
// const searchBtn = document.querySelector('.home_header-btn');
const mainListRef = document.querySelector('.film-list');
const attantionEl = document.querySelector('.home_header-attention');

formEl.addEventListener('submit', searchFilm);

async function searchFilm(e) {
  e.preventDefault();

  if (!Boolean(formEl[0].value.trim())) {
    attantionEl.style.visibility = 'visible';
    Notify.warning('Введіть назву фільму.');
    return;
  }
  const searchMovie = await popularMovieFromServer
    .getSubmitMovieFromServer(formEl[0].value.trim())
    .then(data => {
      return data;
    });

  if (searchMovie.total_results == 0) {
    Notify.warning('Такого фільму немає.');
    return;
  }

  mainListRef.innerHTML = '';

  addMurkupOnPage(searchMovie.results);
}

//нижче функції по рендерингу карток

// Функция ожидает массив объектов и рендерит разметку карточек фильмов на страницу
function addMurkupOnPage(array) {
  const murkupFromArray = array
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      const imageUrl = `src="https://www.themoviedb.org/t/p/w500/${poster_path}"`;
      const genre = getGenreArrayForOnCard(genre_ids);
      if (genre.length === 1) {
        return `<li class="film-item" id="${id}">
    <img width="280" class="film-img" ${imageUrl}" alt="${title}" />
    <p class="film-name">
      ${title} <br />
      <span class="film-tag">${genre[0]} | ${release_date.slice(0, 4)}</span>
    </p>
  </li>`;
      }
      if (genre.length > 1 && genre.length < 3) {
        return `<li class="film-item" id="${id}">
		  <img width="280" class="film-img" ${imageUrl}" alt="${title}" />
    <p class="film-name">
      ${title} <br />
      <span class="film-tag">${genre[0]}, ${genre[1]} | ${release_date.slice(
          0,
          4
        )}</span>
    </p>
  </li>`;
      }
      if (genre.length > 2) {
        return `<li class="film-item" id="${id}">
    <img width="280" class="film-img" ${imageUrl}" alt="${title}" />
    <p class="film-name">
      ${title} <br />
      <span class="film-tag">${genre[0]}, ${
          genre[1]
        }, Other | ${release_date.slice(0, 4)}</span>
    </p>
  </li>`;
      }
    
    })
    .join('');
  mainListRef.insertAdjacentHTML('beforeend', murkupFromArray);
}

// Функция ожидает массив id в виде чисел и возвращает массив жанров для конкретного фильма
function getGenreArrayForOnCard(genresIds) {
  const genresArrayForOnCard = [];

  for (const genresId of genresIds) {
    genresInfo.map(genre => {
      if (genresId === genre.id) {
        genresArrayForOnCard.push(genre.name);
      }
    });
  }

  return genresArrayForOnCard;
}

const genresInfo = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

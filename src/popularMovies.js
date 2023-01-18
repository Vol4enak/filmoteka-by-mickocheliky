import Pagination from 'tui-pagination';
import { PopularMovieFromServer } from './fetch_api';
import { getFetchedById } from './fetch_api';
import { currentPage } from './js/body-logic/pagination';

const modalBox = document.querySelector('.clearing-modal');
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

export const genresInfoUk = [
  { id: 28, name: 'Бойовик' },
  { id: 12, name: 'Пригоди' },
  { id: 16, name: 'Мультфільм' },
  { id: 35, name: 'Комедія' },
  { id: 80, name: 'Кримінал' },
  { id: 99, name: 'Документальний' },
  { id: 18, name: 'Драма' },
  { id: 10751, name: 'Сімейний' },
  { id: 14, name: 'Фентезі' },
  { id: 36, name: 'Історичний' },
  { id: 27, name: 'Жахи' },
  { id: 10402, name: 'Музика' },
  { id: 9648, name: 'Детектив' },
  { id: 10749, name: 'Мелодрама' },
  { id: 878, name: 'Фантастика' },
  { id: 10770, name: 'Телефільм' },
  { id: 53, name: 'Трилер' },
  { id: 10752, name: 'Військовий' },
  { id: 37, name: 'Вестерн' },
];

const mainListRef = document.querySelector('.film-list');
console.log(mainListRef);
console.log(123);
const paginationBox = document.querySelector('#pagination');

const popularMovieFromServer = new PopularMovieFromServer();

addPopularMovieToPage();
paginationOnMainPage();

// Функция ожидает номер страницы, делает запрос на сервер и рендерит разметку

export async function addPopularMovieToPage(newPage = 1) {
  popularMovieFromServer.page = newPage;
  const popularMovie = await popularMovieFromServer
    .getPopularMovieFromServer()
    .then(data => {
      return data;
    });
  mainListRef.innerHTML = '';
  addMurkupOnPage(popularMovie.results);
}

// Функция ожидает массив объектов и рендерит разметку карточек фильмов на страницу
export function addMurkupOnPage(array) {
  const url =
    'src="https://media.istockphoto.com/id/984996502/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BD%D0%B5%D0%B7%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%83.jpg?s=612x612&w=0&k=20&c=fWxMbUFQMxaL5_wB6SjZ9LLGnvpkCYAIdpqgde_ieR4="';
  const murkupFromArray = array
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      const imageUrl = `src="https://www.themoviedb.org/t/p/w500/${poster_path}"`;
      const genre = getGenreArrayForOneCard(genre_ids);
      let nameOfGenre = '';
      if (genre.length === 1) {
        nameOfGenre = genre[0];
      } else if (genre.length === 2) {
        nameOfGenre = genre[0] + ', ' + genre[1];
      } else if (genre.length === 3) {
        nameOfGenre = genre[0] + ', ' + genre[1] + ', ' + genre[2];
      } else if (genre.length >= 4) {
        nameOfGenre = genre[0] + ', ' + genre[1] + ', ' + 'Other';
      } else {
        nameOfGenre = 'There is no genre';
      }
      return `<li class="film-item" id="${id}">
    <img width="280" class="film-img" ${
      poster_path ? imageUrl : url
    }" alt="${title}" />
    <p class="film-name">
      ${title} <br />
      <span class="film-tag">${nameOfGenre} | ${
        release_date ? release_date.slice(0, 4) : 'There is no date'
      }</span>

    </p>
  </li>`;
    })
    .join('');
  mainListRef.insertAdjacentHTML('beforeend', murkupFromArray);
}

// Функция ожидает массив id в виде чисел и возвращает массив жанров для конкретного фильма
export function getGenreArrayForOneCard(genresIds) {
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

// Пагинация для главной старницы
async function paginationOnMainPage() {
  const totalPages = await popularMovieFromServer
    .getPopularMovieFromServer()
    .then(data => {
      return data.total_pages;
    });
  const opt = paginationOptions(totalPages);
  const pagination = new Pagination('pagination', opt);
  pagination.on('beforeMove', evt => {
    const currentPage = evt.page;
    addPopularMovieToPage(currentPage);
  });
}
// Опции пагинации
export function paginationOptions(amount) {
  const options = {
    totalItems: amount,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,

    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">:::</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">:::</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">...' +
        '<span class="tui-ico-ellip"></span>' +
        '</a>',
    },
  };
  return options;
}

export function renderModalInformation(name) {
  let {
    poster_path,
    original_title,
    id,
    release_date,
    vote_average,
    vote_count,
    popularity,
    overview,
  } = name;
  let imgPreview = 'https://image.tmdb.org/t/p/w500';
  if (!poster_path) {
    poster_path = '/wp-content/uploads/2022/05/coming-soon.jpg';
    imgPreview = 'https://en9lish.com';
  }
  if (!release_date) {
    release_date = 'N/A';
  }

  getFetchedById(id).then(res => {
    let genres = res.genres.map(res => res.name);
    if (genres.length === 0) {
      genres.push('N/A');
    }
    genres = genres.slice(0, 1);

    const render = ` 
      <img src="${imgPreview}${poster_path}" alt="123" width="240" height="357">
                <h2 class="mobal__title">${original_title}</h2>
                <div class="helper-in-modal">
                    <ul class="mobal__list--description">
                        <li class="mobal-list__item">
                            <p class="mobal-item__text">Vote / Votes</p>
                        </li>
                        <li class="mobal-list__item">
                            <p class="mobal-item__text"> <span class="module__text-popularity">Popularity</span> </p>
                        </li>
                        <li class="mobal-list__item">
                            <p class="mobal-item__text">Original Title</p>
                        </li>
                        <li class="mobal-list__item">
                            <p class="mobal-item__text">Genre</p>
                        </li>
                    </ul>
                    <ul class="mobal__list--info">
                        <li class="mobal-list__item">
                            <p class="mobal-item__text"><span class="module__text-vote">${vote_average}</span> /
                                <span class="module__text-votes">${vote_count}</span>
                            </p>
                        </li>
                        <li class="mobal-list__item">
                            <p class="mobal-item__text">${popularity}</p>
                        </li>
                        <li class="mobal-list__item">
                            <p class="mobal-item__text">${original_title}</p>
                        </li>
                        <li class="mobal-list__item">
                            <p class="mobal-item__text">${genres}</p>
                        </li>
                    </ul>
                </div>
                <p class="mobal__title--about">About</p>
                <p class="mobal__title--about-text">${overview}</p>
                ${zxc(id)}`;

    return modalBox.insertAdjacentHTML('beforeend', render);
  });
}

function zxc(id) {
  const btnName = id.toString();

  let watchBtn = '';
  let queueBtn = '';
  const getItemWatched = localStorage.getItem('data-watched');
  const parseItemWatched = JSON.parse(getItemWatched);

  const getItemQueue = localStorage.getItem('data-queue');
  const parseItemQueue = JSON.parse(getItemQueue);

  if (parseItemWatched.includes(btnName)) {
    watchBtn = 'remove from Watched';
  } else {
    watchBtn = 'add to Watched';
  }
  if (parseItemQueue.includes(btnName)) {
    queueBtn = 'remove from queue';
  } else {
    queueBtn = 'add to queue';
  }

  return `<ul class="modal-btn__list">
                    <li class="modal-btn__item">
                        <button type="button" class="modal-btn__watched " data-action="watched" >${watchBtn}</button>
                    </li>
                    <li class="modal-btn__item">
                        <button type="button" class="modal-btn__queue " data-action="queue" >${queueBtn}</button>
                    </li>
                </ul>`;
}

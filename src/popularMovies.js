import Pagination from 'tui-pagination';
import { PopularMovieFromServer } from './fetch_api';



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

const mainListRef = document.querySelector('.film-list-home');
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
      return `<li class="film-item">
    <img width="280" class="film-img" ${
      poster_path ? imageUrl : url
    }" alt="${title}" data-action="${id}" />
    <p class="film-name"data-action="${id}">
      ${title} <br />
      <span class="film-tag" data-action="${id}">${nameOfGenre} | ${
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

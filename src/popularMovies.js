import PopularMovieFromServer from './fetch_api';
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';


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

const genresInfoUk = [
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

const mainListRef = document.querySelector('.film-list')


const popularMovieFromServer = new PopularMovieFromServer;

addPopularMovieToPage();
paginationOnPage();

// Функция ожидает номер страницы, делает запрос на сервер и рендерит разметку
async function addPopularMovieToPage(newPage = 1) {
  popularMovieFromServer.page = newPage;
  const popularMovie = await popularMovieFromServer.getPopularMovieFromServer().then(data => {
    return data;
  });
  mainListRef.innerHTML = '';

  addMurkupOnPage(popularMovie.results)
}
// Функция ожидает массив объектов и рендерит разметку карточек фильмов на страницу
function addMurkupOnPage(array) {
  const murkupFromArray = array.map(({id, poster_path, title, genre_ids, release_date}) => {
    const imageUrl = `src="https://www.themoviedb.org/t/p/w500/${poster_path}"`;
    const genre = getGenreArrayForOnCard(genre_ids);
    if (genre.length === 1) {
      return `<li class="film-item" id="${id}">
    <img width="280" class="film-img" ${imageUrl}" alt="${title}" />
    <p class="film-name">
      ${title} <br />
      <span class="film-tag">${genre[0]} | ${release_date.slice(0, 4)}</span>
    </p>
  </li>`
    }
    if (genre.length > 1 && genre.length < 3) {
      return `<li class="film-item" id="${id}">
    <img width="280" class="film-img" ${imageUrl}" alt="${title}" />
    <p class="film-name">
      ${title} <br />
      <span class="film-tag">${genre[0]}, ${genre[1]} | ${release_date.slice(0, 4)}</span>
    </p>
  </li>`
    }
    if (genre.length > 2) {
      return `<li class="film-item" id="${id}">
    <img width="280" class="film-img" ${imageUrl}" alt="${title}" />
    <p class="film-name">
      ${title} <br />
      <span class="film-tag">${genre[0]}, ${genre[1]}, Інше | ${release_date.slice(0, 4)}</span>
    </p>
  </li>`
    }
    // console.log(poster_path)
    
  }).join('');
  mainListRef.insertAdjacentHTML('beforeend', murkupFromArray)
}

// Функция ожидает массив id в виде чисел и возвращает массив жанров для конкретного фильма
function getGenreArrayForOnCard(genresIds) {
  const genresArrayForOnCard = [];
  
  for (const genresId of genresIds) {
    genresInfoUk.map(genre => {
      if (genresId === genre.id) {
        genresArrayForOnCard.push(genre.name);
      }
    })
  }
  
  return genresArrayForOnCard;
}


async function paginationOnPage() {
  const totalPages = await popularMovieFromServer.getPopularMovieFromServer().then(data => {
    // console.log(data.total_pages);
    return data.total_pages;
  }); 
  const opt = paginationOptions(totalPages)
  const pagination = new Pagination('pagination', opt);
  pagination.on('beforeMove', (evt) => {
    // console.log(evt.page)
    const currentPage = evt.page;
    addPopularMovieToPage(currentPage)
  })
}

function paginationOptions(amount) {
  const options = {
    totalItems: amount,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,

    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
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
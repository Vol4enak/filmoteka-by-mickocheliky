import { tagsMenu, tagsList, sortMenu, gallery } from '../refs';

const API_KEY = 'b1cb6bb9f0fb8b16da0ef0bac91fc5ae';
const BASE_URL = 'https://api.themoviedb.org';
const KEY_STORAGE_FILMS = 'films';
const KEY_STORAGE_TAGS = 'tags';

sortMenu.addEventListener('click', e => {
  e.currentTarget.classList.toggle('is-open');
  tagsMenu.classList.toggle('is-open');

  if (!e.currentTarget.classList.contains('is-open')) {
    return (tagsList.innerHTML = '');
  }

  getAllTags().then(tags => {
    renderTagsList(tags);
  });
});

tagsList.addEventListener('click', event => {
  event.preventDefault();
  const nameOfEl = event.target.nodeName;
  if (nameOfEl !== 'A') {
    return;
  }

  const currentSortBy = Number(event.target.dataset.id);

  getPopularSortBy(currentSortBy).then(films => {
    renderCards(films);
  });
});

function getPopularSortBy(id) {
  return fetch(
    `${BASE_URL}/3/discover/movie?sort_by=popularity.desc&with_genres=${id}&api_key=${API_KEY}&${this._paga}`
  )
    .then(r => r.json())
    .then(data => {
      localStorage.setItem(KEY_STORAGE_FILMS, JSON.stringify(data));

      return data.results;
    });
}

function getFilms() {
  return fetch(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${this._search}&language=en-US&page=${this._paga}`
  )
    .then(r => r.json())
    .then(data => {
      localStorage.setItem(KEY_STORAGE_FILMS, JSON.stringify(data));
      return data.results;
    });
}

function getGenres() {
  const url = `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  return fetch(url)
    .then(r => r.json())
    .then(data => data.genres);
}

async function getAllTags() {
  const tags = await getGenres();

  localStorage.setItem(KEY_STORAGE_TAGS, JSON.stringify(tags));

  return await JSON.parse(localStorage.getItem(KEY_STORAGE_TAGS));
}

function createCard(film) {
  const { overview, title, poster_path, release_date, genre_ids, id } = film;

  const tags = checkTags(getTagsById(genre_ids));

  return ` <li data-id="${id}" class="film-item">${
    poster_path
      ? `<img src="https://image.tmdb.org/t/p/w500${poster_path}"`
      : `<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"`
  }
             class="film-img"
             alt="${title}"
             width="280"
             loading="lazy"
             />
             
               <p class="film-name"data-action="${id}">
      ${title} <br />
      <span class="film-tag" data-action="${id}">${tags} | ${
    release_date ? release_date.slice(0, 4) : 'There is no date'
  }</span>

    </p>
              
              
              </li>`;
}

function renderCards(films) {
  const markup = films.map(createCard).join('');

  gallery.innerHTML = markup;
}

function createTag({ id, name }) {
  return `
      <li  class="menu-tags__item">
        <a data-id="${id}" class="menu-tags__link" href="./">${name}</a></li>
`;
}

function renderTagsList(tags) {
  const markup = tags.map(createTag).join('');

  tagsList.innerHTML = markup;
}


function renderTagsList(tags) {
  const markup = tags.map(createTag).join('');

  tagsList.innerHTML = markup;
}

function getTagsById(tagsId) {
  const tags = JSON.parse(localStorage.getItem(KEY_STORAGE_TAGS));
  let tagsString = '';

  for (const id of tagsId) {
    tags.forEach(tag => {
      if (tag.id === id) {
        tagsString += ' ' + tag.name;
      }
    });
  }
  return tagsString.split(' ').slice(1).join(', ');
}

function checkTags(tags) {
  const tagsWords = tags.split(' ').slice(0, tags.length - 1);

  if (tags.length > 25 || tagsWords.length > 5) {
    const updateText = tagsWords.slice(0, 2);
    updateText.push('Other');
    return updateText.join('');
  }

  return tags;
}

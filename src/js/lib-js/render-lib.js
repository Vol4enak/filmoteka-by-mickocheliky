import {
  arrIdCardForWatched,
  arrIdCardForQueue,
} from '../body-logic/modal-win/modal-btn';
import { getFetchedById } from '../../fetch_api';

const bodyEl = document.querySelector('.film-list');
const btnLibWatched = document.querySelector('.header-list--lib__btn-watched');
const btnLibQueue = document.querySelector('.header-list--lib__btn-queue');
const clearModal = document.querySelector('.clearing-modal');
const body = document.querySelector('body');
const modalBtn = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');

btnLibWatched.addEventListener('click', LibCardrenderWatch);
btnLibQueue.addEventListener('click', LibCardrenderQueue);
bodyEl.addEventListener('click', openModal);

export function openModal(e) {
  const query = e.target.nodeName;
  if (query === 'IMG' || query === 'P' || query === 'UL') {
    modal.addEventListener('click', onBtnClick);
    modalBtn.addEventListener('click', onClose);
  }
}
LibCardrenderWatch();
console.log(123);
let a = 0;
let b = 0;
function onBtnClick(e) {
  const query = e.target.nodeName;
  const queryClass = e.target.className;
  const dataId = e.target.dataset.action;

  if (query === 'BUTTON' && dataId === 'watched') {
    a += 1;
  }
  if (query === 'BUTTON' && dataId === 'queue') {
    b += 1;
  }

  if (queryClass === 'overlay') {
    onClose();
    if (a % 2 === 1) {
      LibCardrenderWatch();
    }
    if (b % 2 === 1) {
      LibCardrenderQueue();
    }
    a = 0;
    b = 0;
  }
}

function onClose() {
  clearModal.innerHTML = '';
  modal.classList.add('visibility');
  body.style.overflow = 'visible';
  modal.removeEventListener('click', onBtnClick);
}

async function LibCardrenderWatch() {
  stylesForWatched();
  bodyEl.innerHTML = '';
  arrIdCardForWatched.map(id => {
    getFetchedById(id).then(res => {
      let { poster_path, original_title, id, release_date } = res;
      let imgPreview = 'https://image.tmdb.org/t/p/w500';
      if (!poster_path) {
        poster_path = '/wp-content/uploads/2022/05/coming-soon.jpg';
        imgPreview = 'https://en9lish.com';
      }
      if (!release_date) {
        release_date = 'N/A';
      }

      let genres = res.genres.map(res => res.name);
      if (genres.length === 0) {
        genres.push('N/A');
      }

      if (genres.length > 3) {
        genres = genres.slice(0, 2) + ', other';
      }
      genres = genres.toString().replaceAll(',', ', ');
      const render = `<article class="box" ">
            <img class="movie-preview"src="${imgPreview}${poster_path}" alt="123" width="336" height="455" data-action="${id}" >
            <ul class="info-list"data-action="${id}">
              <li>
              <p class="info-list__title"data-action="${id}">${original_title}</p>
              </li>
              <li>
            <p class="info-list__genres"data-action="${id}">${genres} | ${release_date.slice(
        0,
        4
      )}</p></li>
          </ul>
                      </article>`;

      return bodyEl.insertAdjacentHTML('beforeend', render);
    });
  });
}

async function LibCardrenderQueue() {
  stylesForQueue();
  bodyEl.innerHTML = '';
  arrIdCardForQueue.map(id => {
    getFetchedById(id).then(res => {
      let { poster_path, original_title, id, release_date } = res;
      let imgPreview = 'https://image.tmdb.org/t/p/w500';
      if (!poster_path) {
        poster_path = '/wp-content/uploads/2022/05/coming-soon.jpg';
        imgPreview = 'https://en9lish.com';
      }
      if (!release_date) {
        release_date = 'N/A';
      }

      let genres = res.genres.map(res => res.name);
      if (genres.length === 0) {
        genres.push('N/A');
      }

      if (genres.length > 3) {
        genres = genres.slice(0, 2) + ', other';
      }
      genres = genres.toString().replaceAll(',', ', ');
      const render = `<article class="box" ">
            <img class="movie-preview"src="${imgPreview}${poster_path}" alt="123" width="336" height="455" data-action="${id}" >
            <ul class="info-list"data-action="${id}">
              <li>
              <p class="info-list__title"data-action="${id}">${original_title}</p>
              </li>
              <li>
            <p class="info-list__genres"data-action="${id}">${genres} | ${release_date.slice(
        0,
        4
      )}</p></li>
          </ul>
                      </article>`;

      return bodyEl.insertAdjacentHTML('beforeend', render);
    });
  });
}

function stylesForWatched() {
  btnLibQueue.style.backgroundColor = 'transparent';
  btnLibQueue.style.border = '1px solid white';
  btnLibWatched.style.backgroundColor = 'rgba(255, 107, 8, 1)';
  btnLibWatched.style.border = '1px solid rgba(255, 107, 8, 1)';
}

function stylesForQueue() {
  btnLibWatched.style.backgroundColor = 'transparent';
  btnLibWatched.style.border = '1px solid white';
  btnLibQueue.style.backgroundColor = 'rgba(255, 107, 8, 1)';
  btnLibQueue.style.border = '1px solid rgba(255, 107, 8, 1)';
}

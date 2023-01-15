// import './popularMovies';
import modalInputTpl from './templates/modal-card.hbs';
import { dynRefs } from './constants/dynamicRefs';
import { refs } from './constants/refs';
import { addWatched } from './addWatched';
import { addQueue } from './addQueue';
import {
  STORAGE,
  DB_STORAGE,
  BUTTON_LABEL_WATCHED_REMOVE,
  BUTTON_LABEL_QUEUE_REMOVE,
} from './constants/app_const';
import { localStorageAPI } from './localStorageAPI';

const modal = refs.modal;

export default function openModalCard(movie, customHtml = '') {
  document.body.classList.add('show-modal-card');

  if (movie && !customHtml) {
    movie.closeSvg = closeSvg;
    movie.fallbackImageDesktop = fallbackImageDesktop;
    const html = modalInputTpl(movie);
    modal.innerHTML = html;
    document.body.style.overflow = 'hidden';
  }

  if (customHtml) {
    modal.innerHTML = customHtml;
  }

  // додає до local storege id фільмів
  checkStorage(movie.id);
  const { addToWatchedBtn, addToQueueBtn, closeModalBtnEl, backdropEl } =
    dynRefs();

  addToWatchedBtn.addEventListener('click', addWatched);
  addToQueueBtn.addEventListener('click', addQueue);

  /////////

  if (closeModalBtnEl) {
    closeModalBtnEl.addEventListener('click', onCloseModalCard);
  }
  backdropEl.addEventListener('click', onBackdropClick);

  window.addEventListener('keydown', onEscKeyPressExit);
}

function onCloseModalCard() {
  const { closeModalBtnEl, backdropEl } = dynRefs();
  document.body.style.overflow = null;
  document.body.classList.remove('show-modal-card');
  window.addEventListener('keydown', onEscKeyPressExit);

  backdropEl.removeEventListener('click', onBackdropClick);
  closeModalBtnEl.removeEventListener('click', onCloseModalCard);
  window.removeEventListener('keydown', onEscKeyPressExit);
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModalCard();
  }
}

function onEscKeyPressExit(event) {
  if (event.code === 'Escape') {
    onCloseModalCard();
  }
}

// Перевіряє стан локал стореджа і встановлює на кнопки віповідний текст і data атребут
function checkStorage(id) {
  let userStorage = '',
    loadStorage = '';
  //const loadStorage = localStorageAPI.load(STORAGE);
  if (auth.currentUser) {
    userStorage = DB_STORAGE;
    loadStorage = localStorageAPI.load(DB_STORAGE);
  } else {
    userStorage = STORAGE;
    loadStorage = localStorageAPI.load(STORAGE);
  }
  const { addToWatchedBtn, addToQueueBtn } = dynRefs();

  if (!loadStorage) {
    return;
  }

  const { watched, queue } = loadStorage;

  const indexOfWarchedMovie = watched.indexOf(id.toString());
  const indexOfQueueMovie = queue.indexOf(id.toString());

  if (indexOfWarchedMovie > -1) {
    addToWatchedBtn.setAttribute('data-btn', 'remove');
    addToWatchedBtn.textContent = BUTTON_LABEL_WATCHED_REMOVE;
  }

  if (indexOfQueueMovie > -1) {
    addToQueueBtn.setAttribute('data-btn', 'remove');
    addToQueueBtn.textContent = BUTTON_LABEL_QUEUE_REMOVE;
  }
}

import { dynRefs } from './constants/dynamicRefs';
import {
  STORAGE,
  DB_STORAGE,
  BUTTON_LABEL_QUEUE_ADD,
  BUTTON_LABEL_QUEUE_REMOVE,
  BUTTON_LABEL_WATCHED_ADD,
} from './constants/app_const';
import { refs } from './constants/refs';
import { onFilmCardClick } from './onFilmCardClick';
import { localStorageAPI } from './localStorageAPI';


// import { removeFromLibraryList, addToLibrary } from './helpers/library-main';

const { headerQueueBtn } = refs;

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

// Додає або видаляє фільм з localStorage в залежності від стану кнопки

export async function addQueue(e) {
  let loadStorage;
  let userStorage;
  if (auth.currentUser) {
    userStorage = DB_STORAGE;
    loadStorage = localStorageAPI.load(DB_STORAGE);
  } else {
    userStorage = STORAGE;
    loadStorage = localStorageAPI.load(STORAGE);
  }
  const { watched, queue } = loadStorage;
  const { addToWatchedBtn, addToQueueBtn } = dynRefs();
  const id = e.currentTarget.dataset.id;
  const btnCondition = e.target.getAttribute('data-btn');
  const indexOfWatchedMovie = watched.indexOf(id);
  const indexOfQueuedMovie = queue.indexOf(id);

  if (btnCondition === 'remove') {
    queue.splice(indexOfQueuedMovie, 1);

    if (auth.currentUser) {
      try {
        await postData(loadStorage);
      } catch (error) {
        Notify.failure('Something went wrong');
      }
    }
    localStorageAPI.save(userStorage, loadStorage);

    if (refs.libBtn && headerQueueBtn.classList.contains('button--accent')) {
      removeFromLibraryList(id);
    }

    e.target.setAttribute('data-btn', 'add');
    e.target.textContent = BUTTON_LABEL_QUEUE_ADD;
    return;
  }

  queue.push(id);

  if (refs.libBtn && headerQueueBtn.classList.contains('button--accent')) {
    try {
      await addToLibrary(id);
      document
        .querySelector(`[data-action='${id}']`)
        .addEventListener('click', onFilmCardClick);
    } catch (error) {}
  }

  if (indexOfWatchedMovie > -1) {
    watched.splice(indexOfWatchedMovie, 1);
    addToWatchedBtn.setAttribute('data-btn', 'add');
    addToWatchedBtn.textContent = BUTTON_LABEL_WATCHED_ADD;

    if (refs.libBtn && !headerQueueBtn.classList.contains('button--accent')) {
      removeFromLibraryList(id);
    }
  }

  if (auth.currentUser) {
    await postData(loadStorage);
  }
  localStorageAPI.save(userStorage, loadStorage);

  e.target.setAttribute('data-btn', 'remove');
  e.target.textContent = BUTTON_LABEL_QUEUE_REMOVE;
}

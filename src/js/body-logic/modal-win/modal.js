import { renderModalInformation } from '../render-cards';
import { getFetchedById } from '../../../fetch_api';
// import '../../lib-js/render-lib';

import {
  btnWatched,
  btnQueue,
  arrIdCardForWatched,
  arrIdCardForQueue,
} from './modal-btn';
const ulEl = document.querySelector('.film-list-home');
const modal = document.querySelector('.modal');
const clearModal = document.querySelector('.clearing-modal');
const modalBtn = document.querySelector('.btn-close');
const body = document.querySelector('body');
const modalWin = document.querySelector('.modal-window');

ulEl.addEventListener('click', openModal);

export function openModal(e) {
  const query = e.target.nodeName;
  const dataId = e.target.dataset.action;
  setIdFromLocalStorage(dataId);
  modalWin.style.opacity = '1';
  if (query === 'IMG' || query === 'P' || query === 'SPAN') {
    getFetchedById(dataId).then(res => {
      renderModalInformation(res);
    });
    modal.addEventListener('click', onBtnClick);
    modal.classList.remove('visibility');
    body.style.overflow = 'hidden';
    modalBtn.addEventListener('click', onClose);
  }
}

export function onClose() {
  clearModal.innerHTML = '';
  modal.classList.add('visibility');
  body.style.overflow = 'visible';
  modalWin.style.opacity = '0';
  modal.removeEventListener('click', onBtnClick);
  localStorage.setItem('data-watched', JSON.stringify(arrIdCardForWatched));
  localStorage.setItem('data-queue', JSON.stringify(arrIdCardForQueue));
}

export function onBtnClick(e) {
  const query = e.target.nodeName;
  const queryClass = e.target.className;
  const dataId = e.target.dataset.action;
  const queryText = e.target.textContent;

  const modalQueue = document.querySelector('.modal-btn__queue');
  const modalWatched = document.querySelector('.modal-btn__watched');
  if (queryClass === 'overlay') {
    onClose();
  }
  if (query === 'BUTTON' && dataId === 'watched') {
    btnWatched(modalWatched, queryText);
  }
  if (query === 'BUTTON' && dataId === 'queue') {
    btnQueue(modalQueue, queryText);
  }
}

function setIdFromLocalStorage(data) {
  localStorage.setItem('data', data);
}

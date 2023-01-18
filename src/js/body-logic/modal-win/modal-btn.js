// import { showWatchedFilms ,showWQueueFilms} from '../../lib-js/render-lib';

const resFromWatch = getIlocaltemWatchedme();
const resFromQueue = getlocalItemQueue();

export let arrIdCardForWatched = [];
export let arrIdCardForQueue = [];
if (resFromWatch) {
  arrIdCardForWatched = resFromWatch;
}
if (resFromQueue) {
  arrIdCardForQueue = resFromQueue;
}

export function btnWatched(modalWatched, queryText) {
  let idCard = localStorage.getItem('data');
  if (queryText === 'remove from Watched') {
    if (arrIdCardForWatched.length === 1) {
      arrIdCardForWatched = [];
      modalWatched.textContent = 'add to Watched';
      return;
    }
    for (let i = 0; i < resFromWatch.length; i++) {
      if (resFromWatch[i] === idCard) {
        resFromWatch.splice(i, 1);
        modalWatched.textContent = 'Add to Watched';
      }
    }
    return;
  }
  modalWatched.textContent = 'remove from Watched';
  modalWatched.style.padding = '6px';
  arrIdCardForWatched.push(idCard);
}

export function btnQueue(modalQueue, queryText) {
  let idCard = localStorage.getItem('data');

  if (queryText === 'remove from queue') {
    if (arrIdCardForQueue.length === 1) {
      arrIdCardForQueue = [];
      modalQueue.textContent = 'add to queue';
      modalQueue.style.paddingRight = '16px';
      modalQueue.style.paddingLeft = '16px';
      return;
    }
    for (let i = 0; i < resFromQueue.length; i++) {
      if (resFromQueue[i] === idCard) {
        resFromQueue.splice(i, 1);
        modalQueue.textContent = 'Add to queue';
      }
    }

    return;
  }
  modalQueue.textContent = 'remove from queue';
  modalQueue.style.padding = '6px';
  arrIdCardForQueue.push(idCard);
}

function getIlocaltemWatchedme() {
  const getItemWatched = localStorage.getItem('data-watched');
  return (getItemWatched = JSON.parse(getItemWatched));
}
function getlocalItemQueue() {
  const getItemQueue = localStorage.getItem('data-queue');
  return (getItemQueue = JSON.parse(getItemQueue));
}

export const dynRefs = (id = 0) => {
  return {
    addToWatchedBtn: document.querySelector('.modal-card__watched-btn'),
    addToQueueBtn: document.querySelector('.modal-card__queue-btn'),
    closeModalBtnEl: document.querySelector('[data-modal-close]'),
    backdropEl: document.querySelector('[data-backdrop]'),
    movieElements: document.querySelectorAll('[data-modal-open]'),
  };
};

import { getFetchedById } from "../../fetch_api";
const modalBox = document.querySelector('.clearing-modal');
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

import PopularMovieFromServer from './fetch_api';
// import genresInfo from './genres_Info';

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

const mainListRef = document.querySelector('.film-list')

const popularMovieFromServer = new PopularMovieFromServer;

addPopularMovieToPage();

async function addPopularMovieToPage() {
  // popularMovieFromServer.page = 2;
  const popularMovie = await popularMovieFromServer.getPopularMovieFromServer().then(data => {
    return data;
  });

  addMurkupOnPage(popularMovie.results)

}

function addMurkupOnPage(array) {
  const murkupFromArray = array.map(({id, poster_path, title, genre_ids, release_date}) => {
    const imageUrl = `src="https://www.themoviedb.org/t/p/w500/${poster_path}"`;
    const genre = getGenreArrayForOnCard(genre_ids);
    // console.log(poster_path)
    return `<li class="film-item" id="${id}">
    <img width="280" class="film-img" ${imageUrl}" alt="${title}" />
    <p class="film-name">
      ${title} <br />
      <span class="film-tag">${genre[0]} | ${release_date.slice(0, 4)}</span>
    </p>
  </li>`
  }).join('');
  mainListRef.insertAdjacentHTML('beforeend', murkupFromArray)
}


function getGenreArrayForOnCard(genresIds) {
  const genresArrayForOnCard = [];
  
  for (const genresId of genresIds) {
    genresInfo.map(genre => {
      if (genresId === genre.id) {
        genresArrayForOnCard.push(genre.name);
      }
    })
  }
  
  return genresArrayForOnCard;
}
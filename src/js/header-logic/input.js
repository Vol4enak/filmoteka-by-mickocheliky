const API_KEY = 'fab59cb7fc5906252e3bc057965c8a74';
const URL = 'https://api.themoviedb.org/3/search/movie?';



function fetch() {
   fetch(`${URL}api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=soul`)
    .then(response => {
        return response.json()
    });
}


const inputEl = document.querySelector('.home_header-input');
inputEl.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
  e.preventDefault();

const inputValue = e.currentTarget.elements.search.value;
  fetch()   

};
 
// function clearContent() {
//   countryListEll.innerHTML = '';
//   countryInfoEll.innerHTML = '';
// }
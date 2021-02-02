import data from '../utils/config.js';
import { filterBy } from '../components/cardTemplate.js';
import { templateButtonsMovie } from '../components/buttonsMovie.js';
import { templateButtonsSeries } from '../components/buttonsSeries.js';
import {
  searchAPI
} from './API.js';
import {
  templateAllCards,
  templateProvider
} from '../components/cardTemplate.js';
import { modalFooter } from '../components/modalfooter.js';
import { filterMethod } from "./data.js"

const dbObject = data.dataBase;
const {
  apiKey,
  baseURL,
  baseImageURL,
  imageSize,
  language,
  searchMulti,
  watchProviders,
} = dbObject;

let arryaMovieAndTvNotNull = [];
let arrayProviders = [];

const inputUser = document.querySelector("#search-input");
const movie = document.getElementById("movie");
const tv = document.getElementById("tv");

function clearDOM() {
  let cards = document.querySelector('#page-main')
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
};

const getWatchProvider = (array) => {
  let arrayEmpty = []
  for (let index of array) {
    let urlProvider = `${baseURL}${index.media_type}/${index.id}/${watchProviders}${apiKey}`
    searchAPI(urlProvider)
      .then((searchReturn) => {
        arrayEmpty.push({
          id: searchReturn.id,
          results: searchReturn.results
        });
        return templateProvider(arrayProviders);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return arrayProviders = arrayEmpty;
};

inputUser.addEventListener("keyup", () => {
  clearDOM()
  let inputValue = inputUser.value.toLowerCase();
  let search = `&query=${inputValue.replaceAll(' ', '%20')}`;
  let urlSearch = `${baseURL}${searchMulti}${apiKey}${language}${search}`;
  searchAPI(urlSearch)
    .then((data) => {
      let arrayFilter = data.results
      let arrayMovieAndTv = filterMethod(arrayFilter,"!==","person");
      arryaMovieAndTvNotNull = filterMethod(arrayMovieAndTv,"!==",null);
      templateAllCards(arryaMovieAndTvNotNull)
      return arryaMovieAndTvNotNull;
    })
    .then((data) => {
      return getWatchProvider(data)
  
    })
})

movie.addEventListener('click', (event) => {
  event.preventDefault();
  clearDOM()
  templateButtonsMovie();
  filterBy(movie, arryaMovieAndTvNotNull, arrayProviders)
  movie.classList.add('nav-item-selected');
  tv.classList.remove('nav-item-selected');
});

tv.addEventListener('click', (event) => {
  event.preventDefault();
  clearDOM()
  templateButtonsSeries();
  filterBy(tv, arryaMovieAndTvNotNull, arrayProviders)
  tv.classList.add('nav-item-selected');
  movie.classList.remove('nav-item-selected');
});

const footerEvent = document.getElementById('footer');

footerEvent.addEventListener('click', (event) => {
  event.preventDefault();
  modalFooter();
})


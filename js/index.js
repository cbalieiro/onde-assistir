import data from '../../utils/config.js';
import { searchAPI } from './API.js';
import { templateAllCards } from '../../components/cardTemplate.js';

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

let arrayMovieAndTv = []

const write = 'homem aranha de volta ao lar';
const search = `&query=${write.replaceAll(' ', '%20')}`;

let urlSearch = `${baseURL}${searchMulti}${apiKey}${language}${search}`;

const getWatchProvider = (array) => {
  for (let index of array) {
    let urlProvider = `${baseURL}${indice.media_type}/${indice.id}/${watchProviders}${apiKey}`
    fetch(urlProvider)
    .then(result=>result.json())
    .then((searchReturn)=>{
        console.log(searchReturn);
        resultSearch.innerHTML = `
        <img class="imagePoster" src="${baseImageURL}${imageSize}${searchReturn.results[0]['poster_path']}" width="150px">
        `
    })
};

searchAPI(urlSearch)
  .then((data) => {
  templateAllCards(data.results)
  return arrayMovieAndTv = data.results;
  })
  .then((data) =>{
    return getWatchProvider(data)
  })

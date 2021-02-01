import data from '../../utils/config.js';
import {
  searchAPI
} from './API.js';
import {
  templateAllCards,
  templateProvider
} from '../../components/cardTemplate.js';

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

let arrayMovieAndTv = [];
let arrayProviders = [];

const write = 'homem aranha';
const search = `&query=${write.replaceAll(' ', '%20')}`;

let urlSearch = `${baseURL}${searchMulti}${apiKey}${language}${search}`;

const getWatchProvider = (array) => {
  for (let index of array) {
    let urlProvider = `${baseURL}${index.media_type}/${index.id}/${watchProviders}${apiKey}`
    fetch(urlProvider)
      .then(result => result.json())
      .then((searchReturn) => {
        let id = searchReturn.id;
        let providers = searchReturn.results.BR;
        arrayProviders.push({
          id: id,
          providers: providers
        });
        return templateProvider(arrayProviders);
      })
      .catch((error) => {
        console.log(error);
      })
  }
};

searchAPI(urlSearch)
  .then((data) => {
    templateAllCards(data.results)
    return arrayMovieAndTv = data.results;
  })
  .then((data) => {
    return getWatchProvider(data)

  })
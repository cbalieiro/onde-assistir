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

const write = 'homem aranha de volta ao lar';
const search = `&query=${write.replaceAll(' ', '%20')}`;

let urlSearch = `${baseURL}${searchMulti}${apiKey}${language}${search}`;

searchAPI(urlSearch).then((data) => {
  return templateAllCards(data.results);
});

import data from '../../utils/config.js'

const dbObject = data.dataBase;
const { apiKey, baseURL, baseImageURL, imageSize, language, searchMulti, watchProviders } = dbObject;

export const templateAllCards = (array) => {
  let cards = '';
  for (let index of array ) {
    cards += ` 
    <div class="show-cards">
    <img class="imagePoster" src="${baseImageURL}${imageSize}${index.poster_path}" width="150px">
    </div>
    `;
  }
   return (document.getElementById("page-main").innerHTML = cards);
}

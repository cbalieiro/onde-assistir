import data from '../utils/config.js'

const dbObject = data.dataBase;
const {
  apiKey,
  baseURL,
  baseImageURL,
  imageSize,
  language,
  searchMulti,
  watchProviders
} = dbObject;

export const templateAllCards = (array) => {
  let cards = '';
  for (let index of array) {
    cards += ` 
    <div class="show-cards">
    <img class="imagePoster" src="${baseImageURL}${imageSize}${index.poster_path}" width="150px">
    <div id="${index.id}"></div>
    </div>
    `;
  }
  return (document.getElementById("page-main").innerHTML = cards);
}

export const templateProvider = (array) => {
  for (let index of array) {
   if (document.getElementById(`${index.id}`)) {
    if(index.providers.flatrate === undefined) {
      document.getElementById(`${index.id}`).innerHTML = ` 
        <p> Não há serviço dispoível no momento de Stream Gratuito no Brasil para esse título.</p>  
     `;
    } else {
       document.getElementById(`${index.id}`).innerHTML = ` 
        <p> Stream </p>
        <p> ${index.providers.flatrate}<p>   
     `;
    }
    }
  }
}
export const filterBy = ((dataType, array) => {
  const filter = array.filter(type => type.media_type == dataType.value);
  templateAllCards(filter);
});
/* <img src="${baseImageURL}${imageSize}${index.providers[0]['logo_path']}" width="40px">  */
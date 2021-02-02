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
  for (let index of array) {
    let cards = document.querySelector("#page-main");
    let card = document.createElement("section");
    card.classList.add('show-cards')
    cards.appendChild(card)
    card.innerHTML = `
    <img class="imagePoster" src="${baseImageURL}${imageSize}${index.poster_path}" width="150px">
    <div id="${index.id}"></div>
    `;
  }
}

export const templateProvider = (array) => {
  for (let index of array) {
    //console.log(index.providers.flatrate)
    if(index.providers.flatrate == undefined) {
      if (document.getElementById(`${index.id}`)) {
        document.getElementById(`${index.id}`).innerHTML = `
        <p> Não há serviço disponível no memento de Streaming Gratuito no Brasil para esse título</p>`;
      }
    } if (index.providers.flatrate != undefined) {
        if (document.getElementById(`${index.id}`)) {
          document.getElementById(`${index.id}`).innerHTML = `
          <p> Stream </p>`;
        }
      }
  }
}

export const filterBy = ((dataType, arraySearch, arrayProvider) => {
  //console.log(arraySearch)
  console.log(dataType.id)
  const filter = arraySearch.filter(type => type.media_type == dataType.id);
  console.log(filter)
  templateAllCards(filter);
  templateProvider(arrayProvider);
});

// if (document.getElementById(`${index.id}`)) {
//  document.getElementById(`${index.id}`).innerHTML = ` 
//    <p> Stream </p>   
//    `;
//  }
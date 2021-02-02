import data from '../utils/config.js'
import { filterMethod , links } from "../js/data.js"

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
    let card = document.createElement("div");
    card.classList.add('card-title')
    cards.appendChild(card)
    card.innerHTML = `
      <img class="card-poster" src="${baseImageURL}${imageSize}${index.poster_path}">
      <div id="${index.id}" class="provider-wrap"></div>
    `;
  }
}

export const templateProvider = (array) => {
  for (let index of array) {
    let providers = index.results;
    if (providers === undefined || providers.BR === undefined || providers.BR === null || providers.BR.flatrate === undefined) {
      if (document.getElementById(`${index.id}`)) {
        document.getElementById(`${index.id}`).innerHTML =
          `<p class="unavailable-title">Indisponível</p>`;
      }
    }
    else {
      if (document.getElementById(`${index.id}`)) {
        document.getElementById(`${index.id}`).innerHTML = ``;
        const arrayflatrate = index.results.BR.flatrate;
        arrayflatrate.forEach(element => {
          console.log(element.logo_path);
          console.log(element.provider_name);
          let linksPath = links(element.logo_path);
          let cardsProviders = document.getElementById(`${index.id}`);
          cardsProviders.classList.add('provider-wrap');
          let cardProvider = document.createElement('div');
          cardsProviders.appendChild(cardProvider);
          cardProvider.innerHTML =
            `<a href="${linksPath}" target="_blank"> 
              <img class="provider-img" src="${baseImageURL}${imageSize}${element.logo_path}">
            </a>
            `;
          element;
        });
      }
    }
  }
}


export const filterBy = ((dataType, arraySearch, arrayProvider) => {
  const filter = filterMethod(arraySearch, "==", dataType.id)
  templateAllCards(filter);
  templateProvider(arrayProvider);
});
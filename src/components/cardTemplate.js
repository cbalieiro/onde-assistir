import data from '../utils/config.js'
import { modalCards } from "../components/modalCards.js"
import { filterMethod, links, filterGenrer } from "../js/data.js"

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
      <img id="teste" class="card-poster" src="${baseImageURL}${imageSize}${index.poster_path}">
      <div id="${index.id}" class="provider-wrap"></div>
    `;
    const clickModal = card.querySelector("#teste")
    clickModal.addEventListener('click', (event) =>{
      event.preventDefault()
      modalCards(index.id, index.poster_path, index.genre_ids, index.title, index.overview, index.release_date)
    })
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

export const filterByGenrer = ((dataType, genrerType, arraySearch, arrayProvider) => {
  const filter = filterMethod(arraySearch, "==", dataType.id);
  const arrayFilterGenrer = filterGenrer(filter, "==", genrerType);
  if(arrayFilterGenrer.length > 0) {
    templateAllCards(arrayFilterGenrer);
    templateProvider(arrayProvider);
  } else {
    let errorMessage = document.querySelector("#page-main");
    let message = document.createElement("section");
    message.classList.add('section-genres');
    errorMessage.appendChild(message)
    message.innerHTML = `    
      <p class="no-titles-msg">Nesta semana não há lançamentos de títulos no gênero escolhido</p>
    ` 
  }

});
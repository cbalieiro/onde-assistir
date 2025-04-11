import { tmdbConfig } from '../utils/config.js'
import { modalCards } from "../components/modalCards.js"
import { filterByMediaType, links, filterByMediaGenrer } from "../js/data.js"


export const createAllCardElements = (array) => {
  for (let index of array) {
    let cards = document.querySelector("#page-main");
    let card = document.createElement("div");
    card.classList.add('card-title')
    cards.appendChild(card)
    card.innerHTML = `
      <img id="teste" class="card-poster" src="${tmdbConfig.baseImageURL}${tmdbConfig.imageResolutionSize}${index.poster_path}">
      <div id="${index.id}" class="availability-wrap"></div>
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
          cardsProviders.classList.add('availability-wrap');
          let cardProvider = document.createElement('div');
          cardProvider.classList.add('provider-wrap');
          cardsProviders.appendChild(cardProvider);
          cardProvider.innerHTML =
            `<a href="${linksPath}" target="_blank"> 
              <img class="provider-img" src="${tmdbConfig.baseImageURL}${tmdbConfig.imageResolutionSize}${element.logo_path}">
            </a>
            `;
          element;
        });
      }
    }
  }
}

export const filterBy = ((dataType, arraySearch, arrayProvider) => {
  const filter = filterByMediaType(arraySearch, {
    include: [ dataType.id],
  });
  createAllCardElements(filter);
  templateProvider(arrayProvider);
});

export const filterByGenrer = ((dataType, genrerType, arraySearch, arrayProvider) => {
  const filter =  filterByMediaType(arraySearch, {
    include: [ dataType.id],
  });
  const arrayFilterGenrer = filterByMediaGenrer(filter, {
    include: [genrerType],
  });
  if(arrayFilterGenrer.length > 0) {
    createAllCardElements(arrayFilterGenrer);
    templateProvider(arrayProvider);
  } else {
    let errorMessage = document.querySelector("#page-main");
    let message = document.createElement("section");
    message.classList.add('section-genres');
    errorMessage.appendChild(message)
    message.innerHTML = `    
      <p class="no-titles-msg">Nesta semana não há lançamentos de títulos no gênero escolhido.</p>
    ` 
  }
});
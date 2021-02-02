import data from '../utils/config.js'
import { filterMethod, filterGenrer } from "../js/data.js"

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
    let providers = index.results; 
    if(providers === undefined || providers.BR === undefined || providers.BR === null || providers.BR.flatrate === undefined) { 
       if (document.getElementById(`${index.id}`)) { 
         document.getElementById(`${index.id}`).innerHTML = 
         ` <p> Não há disponibilidade em serviços de streaming</p>`; } } 
         else {
           if (document.getElementById(`${index.id}`)) { 
             document.getElementById(`${index.id}`).innerHTML = 
             ` <p> Stream </p>`; 
             const arrayflatrate = index.results.BR.flatrate; 
             arrayflatrate.forEach(element => {
               let cardsProviders = document.getElementById(`${index.id}`);
               let cardProvider =  document.createElement('div');
               cardsProviders.appendChild(cardProvider);
                cardProvider.innerHTML = 
               `<img class="imgProvider" src="${baseImageURL}${imageSize}${element.logo_path}" width="40px"> `; 
               element;
             }); 
            }
    }    
  } 
} 


export const filterBy = ((dataType, genrer, arraySearch, arrayProvider) => {
  const filter = filterMethod(arraySearch,"==", dataType.id);
  console.log(filter);
  const filterGenrer1 = filterGenrer(filter,"==", genrer);
  console.log(filterGenrer1);
  templateAllCards(filterGenrer1);
  templateProvider(arrayProvider);
});
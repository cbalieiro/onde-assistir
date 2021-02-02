import data from '../utils/config.js';
import { filterBy } from '../components/cardTemplate.js';
import { templateButtons } from '../components/buttons.js';
import {
  searchAPI
} from './API.js';
import {
  templateAllCards,
  templateProvider
} from '../components/cardTemplate.js';

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

let arryaMovieAndTvNotNull = [];
let arrayProviders = [];

const inputUser = document.querySelector("#search-input");

<<<<<<< HEAD
const footer = document.getElementById('footer');
=======
>>>>>>> 43fd13e4098d5a981f600a180cf0e5951cc247be
const movie = document.getElementById("movie");
const tv = document.getElementById("tv");

const getWatchProvider = (array) => {
  let arrayEmpty = []
  for (let index of array) {
    let urlProvider = `${baseURL}${index.media_type}/${index.id}/${watchProviders}${apiKey}`
    searchAPI(urlProvider)
      .then((searchReturn) => {
        arrayEmpty.push({
          id: searchReturn.id,
          results: searchReturn.results
        });
        return templateProvider(arrayProviders);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return arrayProviders = arrayEmpty;
};

inputUser.addEventListener("keyup", () => {
  clearDOM()
  let inputValue = inputUser.value.toLowerCase();
  let search = `&query=${inputValue.replaceAll(' ', '%20')}`;
  let urlSearch = `${baseURL}${searchMulti}${apiKey}${language}${search}`;
  searchAPI(urlSearch)
    .then((data) => {
      let arrayFilter = data.results
      let arrayMovieAndTv = arrayFilter.filter((array) =>{
        return array.media_type !== "person";
      })
      arryaMovieAndTvNotNull = arrayMovieAndTv.filter((array) => {
        return array.poster_path !== null;
      })
      templateAllCards(arryaMovieAndTvNotNull)
      return arryaMovieAndTvNotNull;
    })
    .then((data) => {
      return getWatchProvider(data)
  
    })
})

movie.addEventListener('click', (event) => {
  event.preventDefault();
  clearDOM()
  templateButtons();
  filterBy(movie, arryaMovieAndTvNotNull, arrayProviders)
  movie.classList.add('nav-item-selected');
  tv.classList.remove('nav-item-selected');
});

tv.addEventListener('click', (event) => {
  event.preventDefault();
  clearDOM()
  templateButtons();
  filterBy(tv, arryaMovieAndTvNotNull, arrayProviders)
  tv.classList.add('nav-item-selected');
  movie.classList.remove('nav-item-selected');
});

function clearDOM() {
  let cards = document.querySelector('#page-main')
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
}

// const modal = document.getElementById("myModal");

// const span = document.getElementsByClassName("close")[0];

// footer.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log("oi")
//   modal.style.dysplay;
// })

// span.addEventListener('click', (event) => {
//   event.preventDefault();
//   modal.style.display = "none";
// })

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// } 

// const showModal = (event) => {
//   modal.classList.add('itemActive');
//   let contentModal = modal.querySelector('.c-modal_content');
//   contentModal.removeAttribute('id');
//   // let elClick = event.target;
//   // let cardClicked = elClick.closest('article.card');
//   // let pokeNum = cardClicked.dataset.num;
//   // let findCard = data.pokemon.find(pokemon => pokemon.num == pokeNum);
//   // let boxType = `type-${findCard.type[0]}`;
//   contentModal.setAttribute('id', boxType);
//   contentModal.innerHTML = `
//     <span class="close">&times;</span>
//     <div class="c-modal-header"><img src="${findCard.img}" alt="">
//       <h1>${findCard.name}</h1>
//       <h2><strong>Type:</strong> ${typeWithSpace(findCard.type)}</h2>
//     </div>
//     <div class="c-modal-container">
//       <p><strong>Height:</strong> ${findCard.size.height}</p>
//       <p><strong>Weight:</strong> ${findCard.size.weight}</p>
//       <p><strong>About:</strong> ${findCard.about}</p>
//     </div>
//     <div class="c-modal-footer">
//       <p><strong>Quick Move:</strong> ${findCard['quick-move'][0].name}</p>
//       <p><strong>Special-Attack:</strong> ${findCard['special-attack'][0].name}</p>
//       <p>${findCard.name.toUpperCase()} has base-attack greater than ${getBaseAttackPercentage(data.pokemon, findCard)}% of Pokémons.</p>
//     </div>`;
//   let btClose = modal.querySelector('.close');
//   btClose.addEventListener('click', hiddenModal);
// }

// const hiddenModal = () => {
//   modal.classList.remove('itemActive');
// }
};

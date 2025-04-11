import { completedSearchUrl, createCompletedGenreUrl, createCompletedWatchProvidersUrl, trendingDataUrl } from '../utils/config.js';
import { fetchDataFromAPI } from '../js/fetchDataFromAPI.js';
import {
  createAllCardElements,
  templateProvider
} from '../components/cardTemplate.js';
import { filterByMediaType, handleError } from "../js/data.js";
import { filterBy, filterByGenrer } from '../components/cardTemplate.js'

import { templateGenre } from '../components/modalCards.js';
import { modalFooter } from '../components/modalfooter.js';
import { templateButtonsMovie } from '../components/buttonsMovie.js';
import { templateButtonsSeries } from '../components/buttonsSeries.js'

let validMediaCollection = [];
let validProvidersCollection = [];
let validGenreCollection = []
let arrayTrends = [];

const queryUserInputElement = document.querySelector("#search-input");
const selectedMovieElement = document.getElementById("movie");
const selectedTVElement = document.getElementById("tv");
const selectedFooterElement = document.getElementById('footer');

function clearPageMainContent() {
  let cards = document.querySelector("#page-main");
  if (cards) {
    while (cards.firstChild) {
      cards.removeChild(cards.firstChild);
    }
  }
}

function resetFooterContent() {
  let footerModalElement = document.querySelector('#footer-modal');
  if (footerModalElement) {
    while (footerModalElement.firstChild) {
      footerModalElement.removeChild(footerModalElement.firstChild);
    }
  }
};

const getAvailableWatchProviders = async (validMediaCollectionData) => {
  let initializedArray = [];
  for (let index of validMediaCollectionData) {
    let completedWatchProvidersUrl = createCompletedWatchProvidersUrl(index.media_type, index.id);
    try {
      const apiThemoviedbResponse = await fetchDataFromAPI(completedWatchProvidersUrl)
      initializedArray.push({
        id: apiThemoviedbResponse.id,
        results: apiThemoviedbResponse.results
      });
      return templateProvider(validProvidersCollection);
    } catch (error) {
      handleError(error);
    }
  }
  return validProvidersCollection = initializedArray;
};

const getAvailableGenre = async (validMediaCollectionData) => {
  let initializedArray = []
  for (let index of validMediaCollectionData) {
    let completedGenreUrl = createCompletedGenreUrl(index.media_type, index.id)
    try {
      const apiThemoviedbResponse = await fetchDataFromAPI(completedGenreUrl)
      initializedArray.push({
        genre: apiThemoviedbResponse.genres,
      });
      return templateGenre(validGenreCollection);
    } catch (error) {
      handleError(error);
    }
  }
  return validGenreCollection = initializedArray;
};


queryUserInputElement.addEventListener("keyup", async () => {
  clearPageMainContent();
  try {
    let formattedSearchQuery = `&query=${queryUserInputElement.value.toLowerCase().replace(/ /g, "%20")}`;
    let urlSearch = `${completedSearchUrl}${formattedSearchQuery}`;
    const apiThemoviedbResponse = await fetchDataFromAPI(urlSearch);
    if (!apiThemoviedbResponse) {
      return validMediaCollection = []
    }
    const { results } = apiThemoviedbResponse;
    validMediaCollection = filterByMediaType(results, {
      exclude: ["person", null]
    });

    createAllCardElements(validMediaCollection);
    getAvailableWatchProviders(validMediaCollection)
    getAvailableGenre(validMediaCollection)
    return validMediaCollection;
  } catch (error) {
    handleError(error);
  }
});

selectedMovieElement.addEventListener('click', async (event) => {
  event.preventDefault();
  await getTrends();
  clearPageMainContent()
  if (validMediaCollection.length === 0) {
    templateButtonsMovie();
  }
  filterBy(selectedMovieElement, validMediaCollection, validProvidersCollection)
  selectedMovieElement.classList.add('nav-item-selected');
  selectedTVElement.classList.remove('nav-item-selected');
  const buttonSelector = document.querySelectorAll('.genre-btn');
  buttonSelector.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      clearPageMainContent();
      const genrerType = button.attributes.value.nodeValue;
      filterByGenrer(selectedMovieElement, genrerType, arrayTrends, validProvidersCollection);
    })
  });
});

selectedTVElement.addEventListener('click', async (event) => {
  event.preventDefault();
  await getTrends();
  clearPageMainContent();
  if (validMediaCollection.length === 0) {
    templateButtonsSeries();
  }
  filterBy(selectedTVElement, validMediaCollection, validProvidersCollection)
  selectedTVElement.classList.add('nav-item-selected');
  selectedMovieElement.classList.remove('nav-item-selected');
  const buttonSelector = document.querySelectorAll('.genre-btn');
  buttonSelector.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      clearPageMainContent();
      const genrerType = button.attributes.value.nodeValue;
      filterByGenrer(selectedTVElement, genrerType, arrayTrends, arrayProviders);
    })
  });
});

selectedFooterElement.addEventListener('click', (event) => {
  event.preventDefault();
  resetFooterContent()
  modalFooter();
  footer.classList.add('hidden');
})

async function getTrends() {
  const apiThemoviedbResponse = await fetchDataFromAPI(trendingDataUrl);
  if (!apiThemoviedbResponse) {
    return [];
  } else {
    const { results } = apiThemoviedbResponse;
    let arrayMovieAndTv = filterByMediaType(results, {
      exclude: ["person", null],
    });
    arrayTrends = arrayMovieAndTv;
    return arrayMovieAndTv;
  }
}

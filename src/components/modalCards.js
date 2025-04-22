import { tmdbConfig } from '../utils/config.js'

const footer = document.querySelector('#footer');

export const modalCards = (id, poster_path, _genre_ids, title, overview, _release_date) => {
    let modalTemplate = document.querySelector('.modal-cards');
    let informationCard = document.createElement('section');
    modalTemplate.classList.add('itemActive');
    informationCard.classList.add('modal');
    footer.classList.add('hidden');
    modalTemplate.appendChild(informationCard);
    informationCard.innerHTML = `
        <img id="${id}" class="modal-poster" src="${tmdbConfig.baseImageURL}${tmdbConfig.imageResolutionSize}${poster_path}">
        <p class="modal-title">${title}</p>
        <p class="modal-overview">${overview}</p>
        <button class="btn-close">Voltar</button>
        `
    
    const btnClose = modalTemplate.querySelector('.btn-close');
    btnClose.addEventListener('click', (event) => {
        event.preventDefault();
        modalTemplate.classList.remove('itemActive');
        footer.classList.remove('hidden');
        informationCard.style.display = "none";
        informationCard.innerHTML = "";
    });
};

export const templateGenre = (array) => {
    array.forEach(function (_element) {
            let allGenre = document.getElementById('genre');
            let genre = document.createElement('div');
            allGenre.appendChild(genre);
            genre.innerHTML = `
        <div>${genre.name}</div>`;
        })
};
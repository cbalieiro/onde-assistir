import data from "../utils/config.js"

const dbObject = data.dataBase;
const {
  baseImageURL,
  imageSize,
} = dbObject;

export const modalCards = (id, poster_path, genre_ids, title, overview, release_date) => {
    let modalTemplate = document.querySelector('.modal-cards');
    let informationCard = document.createElement('section');
    modalTemplate.classList.add('itemActive');
    informationCard.classList.add('modal-information')
    modalTemplate.appendChild(informationCard);
    informationCard.innerHTML = `
        <img id="${id}" class="modal-poster" src="${baseImageURL}${imageSize}${poster_path}" width="100px">
        <div> ${title}</div>
        <div id="genre"></div>
        <div> ${release_date}</div>
        <div> ${overview}</div>
        <span class="btnClose">&times;</span>`
    
    const btnClose = modalTemplate.querySelector('.btnClose');
    btnClose.addEventListener('click', (event) => {
        event.preventDefault();
        modalTemplate.classList.remove('itemActive');
        informationCard.style.display = "none";
        informationCard.innerHTML = "";
    });
};

export const templateGenre = (array) => {
    array.forEach(element =>{
        let allGenre = document.getElementById('genre')
        let genre = document.createElement('div')
        allGenre.appendChild(genre)
        genre.innerHTML = `
        <div>${genre.name}</div>`
    })
};
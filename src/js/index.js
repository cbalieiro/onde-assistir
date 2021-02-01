import data from '../../utils/config.js'

const dbObject = data.dataBase;
const { apiKey, baseURL, baseImageURL, imageSize, language, searchMulti, watchProviders } = dbObject;

const write = "homem aranha de volta ao lar"
const search = `&query=${write.replaceAll(" ","%20")}`
const resultSearch = document.querySelector("#page-main")

let urlSearch = `${baseURL}${searchMulti}${apiKey}${language}${search}`

const searchUser = () => {
    fetch(urlSearch)
    .then(result=>result.json())
    .then((searchReturn)=>{
        console.log(searchReturn);
        resultSearch.innerHTML = `
        <img class="imagePoster" src="${baseImageURL}${imageSize}${searchReturn.results[0]['poster_path']}" width="150px">
        `
    })
};

searchUser()
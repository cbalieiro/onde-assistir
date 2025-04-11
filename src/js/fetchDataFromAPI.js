import { handleError } from "./data.js";

export const fetchDataFromAPI = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    // if (!isValidTheMovieDBResponse(data)) {
    //   throw new Error("Formato inesperado da resposta da API TheMovieDB: " + JSON.stringify(data));
    // }
    return data;
  } catch (err) {
    handleError(err);
    return null;
  }
}

function isValidTheMovieDBResponse(data) {
  return (
    data &&
    Array.isArray(data.results) &&
    typeof data.page === 'number' &&
    typeof data.total_pages === 'number' &&
    typeof data.total_results === 'number'
  );
}

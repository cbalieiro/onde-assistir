import { handleError } from "./data.js";

export const fetchDataFromAPI = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    if (erros[response.status]) {
      throw new Error(erros[response.status]);
    }
    const data = await response.json();
    if (!isValidTheMovieDBResponse(data)) {
      throw new Error("Formato inesperado da resposta da API TheMovieDB: " + JSON.stringify(data));
    }
    return data;
  } catch (err) {
    handleError(err);
    return null;
  }
}

function isValidTheMovieDBResponse(data) {
  return (
    data &&
    Array.isArray(data.results) && (
    typeof data.page === 'number' &&
    typeof data.total_pages === 'number' &&
    typeof data.total_results === 'number') || (typeof data.id === 'number')
  );
}

const erros = { 
  400: "Requisição inválida. Verifique os parâmetros.",
  401: "Acesso não autorizado. Verifique sua chave de API.",
  404: "Recurso não encontrado. Verifique a URL.",
  500: "Erro interno do servidor. Tente novamente mais tarde.",
  503: "Serviço temporariamente indisponível. Tente novamente mais tarde.",
  504: "Tempo limite de solicitação. Tente novamente mais tarde.",
  default: "Erro desconhecido. Tente novamente mais tarde."
}
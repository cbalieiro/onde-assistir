const tmdbConfig = {
  apiKeyForTMDB: `api_key=${"7d43a1e1ea67beefaa2fddb70820fd20"}`,
  baseURL: "https://api.themoviedb.org/3/",
  baseImageURL: "https://image.tmdb.org/t/p/",
  imageResolutionSize: "original",
  defaultLanguage: "&language=pt-br",
  multiSearchEndpoint: "search/multi?",
  mediaProviders: "watch/providers?",
};

const trendingDataUrl =
  "https://api.themoviedb.org/3/trending/all/week?api_key=7d43a1e1ea67beefaa2fddb70820fd20";

const completedSearchUrl = `${tmdbConfig.baseURL}${tmdbConfig.multiSearchEndpoint}${tmdbConfig.apiKeyForTMDB}${tmdbConfig.defaultLanguage}`;

const createCompletedGenreUrl = (media_type, id) => {
  return `${tmdbConfig.baseURL}${media_type}/${id}?${tmdbConfig.apiKeyForTMDB}${tmdbConfig.defaultLanguage}`;
};

const createCompletedWatchProvidersUrl = (media_type, id) => {
  return `${tmdbConfig.baseURL}${media_type}/${id}/${tmdbConfig.mediaProviders}${tmdbConfig.apiKeyForTMDB}`;
}


export { completedSearchUrl, createCompletedGenreUrl, createCompletedWatchProvidersUrl, trendingDataUrl, tmdbConfig };

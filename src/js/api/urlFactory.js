export const urlFactory = {
  produceUrlByName: name => {
    const PUNK_API_CURRENT_NAME = 'https://api.punkapi.com/v2/beers?beer_name=';
    return PUNK_API_CURRENT_NAME + name;
  },
  produceUrlById: id => {
    const PUNK_API_CURRENT_ID = 'https://api.punkapi.com/v2/beers/';
    return PUNK_API_CURRENT_ID + id;
  },
  produceUrlForAllBeers: () => {
    const PUNK_API = 'https://api.punkapi.com/v2/beers?page=1';
    return PUNK_API;
  },
  produceUrlForNextBeerPage: number => {
    const PUNK_API_CURRENT_PAGE = 'https://api.punkapi.com/v2/beers?page=';
    return PUNK_API_CURRENT_PAGE + number;
  },
  produceUrlForFavoriteBeer: missingBeer => {
    const PUNK_API_IDS = 'https://api.punkapi.com/v2/beers?ids=';
    const idsString = missingBeer.reduce((str, id) => str.concat(id, '|'), '');
    return PUNK_API_IDS + idsString;
  },
};

import { FILTER_PROPERTY_TYPE } from '../constants';

export const urlFactory = {
  produceUrlByName: (name, params) => {
    const PUNK_API_WITH_NAME = 'https://api.punkapi.com/v2/beers?beer_name=';
    const PUNK_API_WITHOUT_NAME = 'https://api.punkapi.com/v2/beers?';

    const paramsQuery = Object.keys(params).reduce(
      (string, current) =>
        string.concat(
          FILTER_PROPERTY_TYPE[current],
          Math.floor(params[current])
        ),
      ''
    );

    if (name) {
      return PUNK_API_WITH_NAME + name + paramsQuery;
    }

    return PUNK_API_WITHOUT_NAME + paramsQuery;
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

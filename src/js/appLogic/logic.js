import _ from 'lodash';
import { LOCAL_STORAGE_ITEMS } from '../constants';

export const selectionNecessaryData = (data, beerId) => {
  const beer = _.find(data, item => item.id === +beerId);
  if (!beer) {
    return null;
  }
  return {
    url: beer.image_url,
    foodPairing: beer.food_pairing,
    brewing: beer.brewers_tips,
    water: beer.boil_volume,
    name: beer.name,
    tagline: beer.tagline,
    description: beer.description,
    alcohol: beer.abv,
    bitterness: beer.ebc,
    beerColor: beer.ibu,
    ingredients: beer.ingredients,
    method: beer.method,
    id: beer.id,
  };
};

export const getDataFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS));

export const setDataToLocalStorage = data => {
  localStorage.setItem(LOCAL_STORAGE_ITEMS, JSON.stringify(data));
};

export const findMissingItems = (allItems, necessaryItems) =>
  necessaryItems.filter(item => {
    const index = _.findIndex(allItems, obj => obj.id === item);
    if (index === -1) {
      return item;
    }
    return null;
  });

export const findFavoriteItem = (allItems, id) => {
  const index = _.findIndex(allItems, obj => obj.id === id);
  return allItems[index];
};

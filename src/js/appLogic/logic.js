import _ from 'lodash';
import { LOCAL_STORAGE_ITEM } from '../constants';

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
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM));

export const setDataToLocalStorage = data => {
  localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(data));
};

const initializeLocalStorage = () => {
  const favoriteList = getDataFromLocalStorage();
  if (!favoriteList) {
    return [];
  }

  return favoriteList;
};

export const checkExistenceInLocalStorage = id => {
  let favoriteList = initializeLocalStorage(id);
  const itemIndex = _.indexOf(favoriteList, id);
  if (itemIndex < 0) {
    favoriteList.push(id);
    setDataToLocalStorage(favoriteList);
    return true;
  }

  favoriteList = _.without(favoriteList, id);
  setDataToLocalStorage(favoriteList);
  return false;
};

export const beerIsFavorite = id => {
  const favoriteList = getDataFromLocalStorage();
  const itemIndex = _.indexOf(favoriteList, id);
  if (itemIndex < 0) {
    return false;
  }
  return true;
};

export const findMissingItems = (allItems, necessaryItems) =>
  necessaryItems.filter(item => {
    const index = _.findIndex(allItems, obj => obj.id === item);
    if (index === -1) {
      return item;
    }
    return null;
  });

export const dataArraysAreEqual = (previousArr, nextArr) =>
  _.isEqual(_.sortBy(previousArr, ['id']), _.sortBy(nextArr, ['id']));

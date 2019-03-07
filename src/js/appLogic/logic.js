import _ from 'lodash';

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

const initializeLocalStorage = () => {
  const favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
  if (!favoriteList) {
    return [];
  }

  return favoriteList;
};

export const addToLocalStorage = id => {
  let favoriteList = initializeLocalStorage(id);
  const itemIndex = _.indexOf(favoriteList, id);
  if (itemIndex < 0) {
    favoriteList.push(id);
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    return true;
  }

  favoriteList = _.without(favoriteList, id);
  localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
  return false;
};

export const beerIsFavorite = id => {
  const favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
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

import _ from 'lodash';

export const selectionNecessaryData = (data, beerId) => {
  const beer = _.find(data, item => item.id === +beerId);
  return {
    url: beer.image_url,
    foodPairing: beer.food_pairing,
    brewing: beer.brewers_tips,
    water: beer.boil_volume,
    name: beer.name,
    tagline: beer.tagline,
    description: beer.description,
    abv: beer.abv,
    ebc: beer.ebc,
    ibu: beer.ibu,
    ingredients: beer.ingredients,
    method: beer.method,
    id: beer.id,
  };
};

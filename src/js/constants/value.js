export const BEER_PROPERTY = {
  alcohol: {
    tooltip: 'Alcohol By Volume',
    abbreviation: 'ABV',
  },
  bitterness: {
    tooltip: 'International Bitterness Units',
    abbreviation: 'IBU',
  },
  beerColor: {
    tooltip: 'European Brewery Convention',
    abbreviation: 'EBC',
  },
};

export const FILTER_PROPERTY_TYPE = ['abv', 'ibu', 'ebc'];

export const LOCAL_STORAGE_ITEMS = 'favoriteList';

export const COUNT_FAVORITE_ITEMS = 5;

export const FILTER_PROPERTY = [
  {
    name: 'Alcohol by volume',
    min: 2,
    max: 14,
    step: 0.1,
    middle: 8,
    type: 'abv',
  },
  {
    name: 'International bitterness units',
    min: 0,
    max: 120,
    step: 1,
    middle: 60,
    type: 'ibu',
  },
  {
    name: 'Color by EBC',
    min: 4,
    max: 80,
    step: 1,
    middle: 42,
    type: 'ebc',
  },
];

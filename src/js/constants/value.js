export const BEER_PROPERTY = {
  alcohol: {
    abbreviation: 'abv',
  },
  bitterness: {
    abbreviation: 'ibu',
  },
  beerColor: {
    abbreviation: 'ebc',
  },
};

export const FILTER_PROPERTY_TYPE = {
  abv: '&abv_lt=',
  ibu: '&ibu_lt=',
  ebc: '&ebc_lt=',
};

export const LOCAL_STORAGE_ITEMS = 'favoriteList';

export const COUNT_FAVORITE_ITEMS = 5;

export const FILTER_PROPERTY = [
  {
    name: 'abv',
    min: 2,
    max: 14,
    step: 0.1,
    middle: 8,
    type: 'abv',
  },
  {
    name: 'ibu',
    min: 0,
    max: 120,
    step: 1,
    middle: 60,
    type: 'ibu',
  },
  {
    name: 'ebc_color',
    min: 4,
    max: 80,
    step: 1,
    middle: 42,
    type: 'ebc',
  },
];

export const LANGUAGES = [
  { className: 'eng-switcher', language: 'en' },
  { className: 'ru-switcher', language: 'ru' },
];

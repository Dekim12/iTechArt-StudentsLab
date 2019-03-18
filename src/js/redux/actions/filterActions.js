import { filter } from 'lodash';
import { cache, findOccurrences } from '../../appLogic';
import {
  FILTER,
  FILTER_PROPERTY_TYPE,
  CHANGE_ABV,
  CHANGE_IBU,
  CHANGE_EBC,
  RESET_FILTER_DATA,
} from '../../constants';

export const filterSearchResult = (searchResult, filterType, value) => {
  const result = filter(searchResult, obj => obj[filterType] <= value);
  cache[filterType] = result;

  const finalSearchResult = findOccurrences(
    Object.keys(cache).map(key => cache[key])
  );

  return {
    type: FILTER,
    payload: finalSearchResult,
  };
};

export const changeRangePosition = (type, value) => {
  switch (type) {
    case FILTER_PROPERTY_TYPE[0]:
      return {
        type: CHANGE_ABV,
        payload: value,
      };
    case FILTER_PROPERTY_TYPE[1]:
      return {
        type: CHANGE_IBU,
        payload: value,
      };
    default:
      return {
        type: CHANGE_EBC,
        payload: value,
      };
  }
};

export const resetFilterData = () => {
  Object.keys(cache).forEach(key => {
    delete cache[key];
  });

  return {
    type: RESET_FILTER_DATA,
  };
};

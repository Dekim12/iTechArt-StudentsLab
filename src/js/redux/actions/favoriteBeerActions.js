import _ from 'lodash';
import { CHANGE_FAVORITE_LIST } from '../../constants';
import { setDataToLocalStorage } from '../../appLogic';

export const changeFavoriteList = (id, favoriteList) => {
  let newFavoriteList;

  if (favoriteList.indexOf(id) < 0) {
    newFavoriteList = _.clone(favoriteList);
    newFavoriteList.push(id);
  } else {
    newFavoriteList = _.without(favoriteList, id);
  }

  setDataToLocalStorage(newFavoriteList);

  return { type: CHANGE_FAVORITE_LIST, payload: newFavoriteList };
};

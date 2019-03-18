import { combineReducers } from 'redux';
import menuState from './menuState';
import apiRequestState from './apiRequestState';
import favoriteBeerState from './favoriteBeersState';
import filterState from './filterState';

export default combineReducers({
  menuState,
  apiRequestState,
  favoriteBeerState,
  filterState,
});

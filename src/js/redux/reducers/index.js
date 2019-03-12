import { combineReducers } from 'redux';
import menuState from './menuState';
import apiRequestState from './apiRequestState';
import favoriteBeerState from './favoriteBeersState';

export default combineReducers({
  menuState,
  apiRequestState,
  favoriteBeerState,
});

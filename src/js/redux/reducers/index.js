import { combineReducers } from 'redux';
import menuState from './menuState';
import apiRequestState from './apiRequestState';

export default combineReducers({ menuState, apiRequestState });

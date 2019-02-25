import { combineReducers } from 'redux';
import menuState from './menuState';
import apiRequestState from './apiRequestState';
import pagesState from './pagesState';

export default combineReducers({ menuState, apiRequestState, pagesState });

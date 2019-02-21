import { combineReducers } from 'redux';
import menuState from './menuState';
import apiReqState from './apiReqState';

export default combineReducers({ menuState, apiReqState });

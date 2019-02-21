import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import apiReqReducer from './apiReqReducer';

export default combineReducers({ menuReducer, apiReqReducer });

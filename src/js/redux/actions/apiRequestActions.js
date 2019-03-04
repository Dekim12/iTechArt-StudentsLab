import {
  REQUEST_SUCCESS,
  SET_BEER_BY_ID,
  SET_BEER_BY_NAME,
  TOGGLE_LOADING,
} from '../../constants';

export const successApiRequest = data => ({
  type: REQUEST_SUCCESS,
  payload: data,
});

export const setBeerById = data => ({
  type: SET_BEER_BY_ID,
  payload: data,
});

export const setBeerByName = data => ({
  type: SET_BEER_BY_NAME,
  payload: data,
});

export const toggleLoading = () => ({ type: TOGGLE_LOADING });

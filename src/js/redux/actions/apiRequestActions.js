import {
  REQUEST_SUCCESS,
  SET_BEER_BY_ID,
  SET_BEER_BY_NAME,
  TOGGLE_LOADING,
  ADD_NEXT_BEER_PAGE,
  NEXT_PAGE_LOADING,
} from '../../constants';

export const setAllBeers = data => ({
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

export const addNextBeerPage = data => ({
  type: ADD_NEXT_BEER_PAGE,
  payload: data,
});

export const toggleNextPageLoading = () => ({ type: NEXT_PAGE_LOADING });

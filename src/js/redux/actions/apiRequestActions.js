import {
  REQUEST_SUCCESS,
  SET_BEER_BY_ID,
  SET_BEER_BY_NAME,
  TOGGLE_LOADING,
  ADD_NEXT_BEER_PAGE,
  NEXT_PAGE_LOADING,
  SET_MISSING_BEER,
  RESET_DATA,
  ERROR_TOGGLE,
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

export const setMissingFavoriteBeer = data => ({
  type: SET_MISSING_BEER,
  payload: data,
});

export const resetSearchData = () => ({ type: RESET_DATA });

export const errorToggle = () => ({ type: ERROR_TOGGLE });

import { REQUEST_SUCCESS, SET_BEER_BY_ID } from '../../constants';

export const successApiRequest = data => ({
  type: REQUEST_SUCCESS,
  payload: data,
});

export const setBeerById = data => ({
  type: SET_BEER_BY_ID,
  payload: data,
});

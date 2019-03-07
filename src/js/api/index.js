import axios from 'axios';
import {
  setAllBeers,
  setBeerById,
  setBeerByName,
  toggleLoading,
  addNextBeerPage,
  setMissingFavoriteBeer,
} from '../redux/actions';
import { urlFactory } from './urlFactory';

export const getAllBeers = () => {
  const url = urlFactory.produceUrlForAllBeers();

  return async dispatch => {
    try {
      const response = await axios.get(url);
      dispatch(setAllBeers(response.data));
    } catch (error) {
      alert(error);
    }
  };
};

export const getBeerById = id => {
  const url = urlFactory.produceUrlById(id);

  return async dispatch => {
    try {
      const response = await axios.get(url);
      dispatch(setBeerById(response.data));
    } catch (error) {
      alert(error);
    }
  };
};

export const getBeerByName = name => {
  const url = urlFactory.produceUrlByName(name);

  return async dispatch => {
    dispatch(toggleLoading());

    try {
      const response = await axios.get(url);
      dispatch(setBeerByName(response.data));
    } catch (error) {
      alert(error);
    }
  };
};

export const getNextBeerPage = number => {
  const url = urlFactory.produceUrlForNextBeerPage(number);

  return async dispatch => {
    try {
      const response = await axios.get(url);
      dispatch(addNextBeerPage(response.data));
    } catch (error) {
      alert(error);
    }
  };
};

export const getFavoriteBeerById = missingBeer => {
  const url = urlFactory.produceUrlForFavoriteBeer(missingBeer);

  return async dispatch => {
    try {
      dispatch(toggleLoading());

      const response = await axios.get(url);
      dispatch(setMissingFavoriteBeer(response.data));
    } catch (error) {
      alert(error);
    }
  };
};

import { unionBy, concat } from 'lodash';
import {
  REQUEST_SUCCESS,
  SET_BEER_BY_ID,
  SET_BEER_BY_NAME,
  TOGGLE_LOADING,
  ADD_NEXT_BEER_PAGE,
  NEXT_PAGE_LOADING,
  SET_MISSING_BEER,
  RESET_DATA,
} from '../../constants';

const initialState = {
  isLoading: true,
  allBeers: [],
  nextPageLoading: false,
  resultSearchBeer: null,
};

const apiRequestState = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING: {
      return { ...state, isLoading: true };
    }
    case REQUEST_SUCCESS: {
      const allBeers = unionBy(state.allBeers, action.payload, 'id');
      return {
        ...state,
        allBeers,
        isLoading: !state.isLoading,
        resultSearchBeer: null,
        data: action.payload,
      };
    }
    case SET_BEER_BY_ID: {
      const allBeers = concat(state.allBeers, action.payload);
      return { ...state, allBeers };
    }
    case SET_BEER_BY_NAME: {
      const allBeers = unionBy(state.allBeers, action.payload, 'id');
      return {
        ...state,
        isLoading: false,
        allBeers,
        resultSearchBeer: action.payload,
      };
    }
    case ADD_NEXT_BEER_PAGE: {
      const allBeers = unionBy(state.allBeers, action.payload, 'id');
      const data = concat(state.data, action.payload);
      return {
        ...state,
        allBeers,
        data,
        nextPageLoading: false,
      };
    }
    case NEXT_PAGE_LOADING:
      return { ...state, nextPageLoading: true };
    case SET_MISSING_BEER: {
      const allBeers = unionBy(state.allBeers, action.payload, 'id');
      return { ...state, allBeers, isLoading: false };
    }
    case RESET_DATA:
      return { ...state, resultSearchBeer: null };
    default:
      return state;
  }
};

export default apiRequestState;

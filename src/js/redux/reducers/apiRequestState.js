import _ from 'lodash';
import {
  REQUEST_SUCCESS,
  SET_BEER_BY_ID,
  SET_BEER_BY_NAME,
  TOGGLE_LOADING,
} from '../../constants';

const initialState = {
  isLoading: true,
  allBeers: [],
};

const apiRequestState = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING: {
      return { ...state, isLoading: true };
    }
    case REQUEST_SUCCESS: {
      const allBeers = _.unionBy(state.allBeers, action.payload, 'id');
      return {
        ...state,
        allBeers,
        isLoading: !state.isLoading,
        resultSearchBeer: null,
        data: action.payload,
      };
    }
    case SET_BEER_BY_ID: {
      const allBeers = _.concat(state.allBeers, action.payload);
      return { ...state, allBeers };
    }
    case SET_BEER_BY_NAME: {
      const allBeers = _.unionBy(state.allBeers, action.payload, 'id');
      return {
        ...state,
        isLoading: false,
        allBeers,
        resultSearchBeer: action.payload,
      };
    }
    default:
      return state;
  }
};

export default apiRequestState;

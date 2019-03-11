import { CHANGE_FAVORITE_LIST } from '../../constants';
import { getDataFromLocalStorage } from '../../appLogic';

const initialState = {
  favoriteBeer: getDataFromLocalStorage() || [],
};

const favoriteBeerState = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FAVORITE_LIST:
      return { favoriteBeer: action.payload };
    default:
      return state;
  }
};

export default favoriteBeerState;

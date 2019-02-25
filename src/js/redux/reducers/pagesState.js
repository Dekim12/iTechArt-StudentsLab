import { SET_BEER_DATA } from '../../constants';

const initialState = {
  beerPageData: {},
};

const pagesState = (state = initialState, action) => {
  switch (action.type) {
    case SET_BEER_DATA:
      return { ...state, beerPageData: action.payload };
    default:
      return state;
  }
};

export default pagesState;

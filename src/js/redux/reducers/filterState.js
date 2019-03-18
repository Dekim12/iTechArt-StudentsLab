import {
  FILTER,
  CHANGE_ABV,
  CHANGE_IBU,
  CHANGE_EBC,
  RESET_FILTER_DATA,
} from '../../constants';

const initialState = {
  filterResult: null,
  abvPosition: null,
  ibuPosition: null,
  ebcPosition: null,
};

const filterState = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return { ...state, filterResult: action.payload };
    case CHANGE_ABV:
      return { ...state, abvPosition: action.payload };
    case CHANGE_IBU:
      return { ...state, ibuPosition: action.payload };
    case CHANGE_EBC:
      return { ...state, ebcPosition: action.payload };
    case RESET_FILTER_DATA:
      return {
        filterResult: null,
        abvPosition: null,
        ibuPosition: null,
        ebcPosition: null,
      };
    default:
      return state;
  }
};

export default filterState;

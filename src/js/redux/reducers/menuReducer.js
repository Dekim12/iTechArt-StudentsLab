import { MENU_TOGGLE } from '../../constants';

const initialState = {
  isOpen: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};

export default menuReducer;

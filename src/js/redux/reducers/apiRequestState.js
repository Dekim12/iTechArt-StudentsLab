import { REQUEST_SUCCESS, SET_BEER_BY_ID } from '../../constants';

const initialState = {
  isLoading: true,
};

const apiRequestState = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return { ...state, isLoading: !state.isLoading, data: action.payload };
    case SET_BEER_BY_ID: {
      const newData = action.payload.concat(state.data);
      return { ...state, data: newData };
    }
    default:
      return state;
  }
};

export default apiRequestState;

import { REQUEST_SUCCESS } from '../../constants';

const initialState = {
  isLoading: true,
};

const apiRequestState = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return { ...state, isLoading: !state.isLoading, data: action.payload };
    default:
      return state;
  }
};

export default apiRequestState;

import { REQUEST_SUCCESS } from '../../constants';

const initialState = {
  isLoading: true,
};

const apiReqState = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return { isLoading: !state.isLoading, data: action.payload };
    default:
      return state;
  }
};

export default apiReqState;

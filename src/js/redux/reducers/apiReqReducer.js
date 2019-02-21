import { IS_LOADING_HANDLER, REQUEST_SUCCESS } from '../../constants';

const initialState = {
  isLoading: false,
};

const apiReqReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_HANDLER:
      return { isLoading: !state.isLoading };
    case REQUEST_SUCCESS:
      return { isLoading: false, data: action.payload };
    default:
      return state;
  }
};

export default apiReqReducer;

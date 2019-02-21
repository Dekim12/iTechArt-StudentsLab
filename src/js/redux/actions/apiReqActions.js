import { IS_LOADING_HANDLER, REQUEST_SUCCESS } from '../../constants';

export const successApiRequest = data => ({
  type: REQUEST_SUCCESS,
  payload: data,
});
export const isLoadingHandler = () => ({ type: IS_LOADING_HANDLER });

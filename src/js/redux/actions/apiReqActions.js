import { REQUEST_SUCCESS } from '../../constants';

export const successApiRequest = data => ({
  type: REQUEST_SUCCESS,
  payload: data,
});

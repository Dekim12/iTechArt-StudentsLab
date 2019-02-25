import axios from 'axios';
import { successApiRequest } from '../redux/actions';
import { PUNK_API } from '../constants';

export const asyncApiRequest = () => {
  return async dispatch => {
    try {
      const response = await axios.get(PUNK_API);
      dispatch(successApiRequest(response.data));
    } catch (error) {
      alert(error);
    }
  };
};

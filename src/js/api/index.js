import axios from 'axios';
import { successApiRequest } from '../redux/actions';
import { PUNK_API } from '../constants';

export const asyncApiRequest = () => {
  return async dispatch => {
    try {
      const firstPage = await axios.get(PUNK_API);
      dispatch(successApiRequest(firstPage.data));
    } catch (error) {
      alert(error);
    }
  };
};

import axios from 'axios';
import { successApiRequest, isLoadingHandler } from '../redux/actions';

export const asyncApiRequest = () => {
  return async dispatch => {
    dispatch(isLoadingHandler());

    try {
      const response = await axios.get(
        'https://api.punkapi.com/v2/beers?page=1&per_page=80'
      );
      dispatch(successApiRequest(response.data));
    } catch (error) {
      alert(error);
    }
  };
};

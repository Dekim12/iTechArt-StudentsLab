import axios from 'axios';
import {
  successApiRequest,
  setBeerById,
  setBeerByName,
  toggleLoading,
} from '../redux/actions';
import {
  PUNK_API,
  PUNK_API_CURRENT_ID,
  PUNK_API_CURRENT_NAME,
} from '../constants';

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

export const getBeerById = id => {
  const url = PUNK_API_CURRENT_ID + id;
  return async dispatch => {
    try {
      const response = await axios.get(url);
      dispatch(setBeerById(response.data));
    } catch (error) {
      alert(error);
    }
  };
};

export const getBeerByName = name => {
  const url = PUNK_API_CURRENT_NAME + name;
  return async dispatch => {
    dispatch(toggleLoading());

    try {
      const response = await axios.get(url);
      dispatch(setBeerByName(response.data));
    } catch (error) {
      alert(error);
    }
  };
};

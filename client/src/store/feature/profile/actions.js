import axios from 'axios';

import {
  GET_USER_RIDE_HISTORY,
  GET_USER_RIDE_HISTORY_REQUEST
} from './types';

import {
    GET_ERROR
} from '../error/types';

export const setNewProfile = (data) => dispatch => {
    axios
      .post(`/api/profile`, data)
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
      }));
}

export const getRideHistory = (id) => dispatch => {

  dispatch({
    type: GET_USER_RIDE_HISTORY_REQUEST
  });

  axios
    .get(`/api/profile/ride-history/${id}`)
    .then(res => dispatch({
      type: GET_USER_RIDE_HISTORY,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: GET_ERROR,
      payload: err.response.data
    }));
    
}
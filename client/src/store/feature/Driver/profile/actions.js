import axios from 'axios';

import {
    GET_ERROR
} from '../../error/types';

import {
    GET_DRIVER_PROFILE,
    GET_DRIVER_PROFILE_REQUEST
} from './types';

export const setDriverProfile = (data) => dispatch => {
    const token = localStorage.jwtDriverToken;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    axios
      .post("/api/driver/profile", data, config)
      .catch(err => dispatch({
          type: GET_ERROR,
          payload: err.response.data
      }));
}

export const getDriverProfile = (driver_account_id) => dispatch => {

    dispatch({
        type: GET_DRIVER_PROFILE_REQUEST
    });

    const token = localStorage.jwtDriverToken;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    axios
      .get(`/api/driver/profile/get/${driver_account_id}`, config)
      .then((res) => dispatch({
          type: GET_DRIVER_PROFILE,
          payload: res.data.data
      }))
      .catch(err => dispatch({
          type: GET_ERROR,
          payload: err.response.data
      }));
}
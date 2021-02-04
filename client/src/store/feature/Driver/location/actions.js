import axios from 'axios';

import {
    GET_ERROR
} from '../../error/types';

export const setDriverLocation = (data) => dispatch => {
    const token = localStorage.jwtDriverToken;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    axios
      .post("/api/driver/location", data, config)
      .catch(err => dispatch({
          type: GET_ERROR,
          payload: err.response.data
      }));
}
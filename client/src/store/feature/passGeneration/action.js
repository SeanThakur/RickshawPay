import axios from 'axios';

import {
    GET_ERROR
} from '../error/types';

import {
    GET_PASS_INFO,
    GET_PASS_INFO_REQUEST
} from './types';

export const setPass = (data) => dispatch => {

    axios
      .post(`/api/pass/generate`, data)
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
    
}

export const getPass = (profile_id) => dispatch => {

    dispatch({
        type: GET_PASS_INFO_REQUEST
    });

    axios
      .get(`/api/pass/get/${profile_id}`)
      .then((res) => dispatch({
        type: GET_PASS_INFO,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
}
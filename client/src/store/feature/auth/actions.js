import axios from 'axios';
import setAuthToken from '../../../helpers/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
    SET_CURRENT_USER,
    SET_CURRENT_USER_OFF
} from './types';

import {
    GET_ERROR
} from '../error/types'

export const getLogin = (data) => dispatch => {
    axios
      .post("/api/auth", data)
      .then(res => {
        const {token} = res.data.auth;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.message
      }));
}

export const setCurrentUser = (decoded) => {
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const setResetPassword = (data) => dispatch => {
    axios
      .put("/api/auth/forget", data)
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
      }));
}

export const Logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUserOff());
}

export const setCurrentUserOff = () => {
    return{
        type: SET_CURRENT_USER_OFF
    }
}
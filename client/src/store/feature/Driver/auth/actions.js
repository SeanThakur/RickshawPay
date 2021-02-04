import axios from 'axios';
import setAuthToken from '../../../../helpers/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
    SET_CURRENT_DRIVER_USER_OFF,
    SET_CURRENT_DRIVER_USER
} from './types';

import {
    GET_ERROR
} from '../../error/types'

export const getDriverLoggedIn = (data) => dispatch => {
    axios
      .post("/api/driver/auth", data)
      .then(res => {
        const {token} = res.data.auth;
        localStorage.setItem("jwtDriverToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentDriverUser(decoded));
      })
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.message
      }));
}

export const setCurrentDriverUser = (decoded) => {
    return{
        type: SET_CURRENT_DRIVER_USER,
        payload: decoded
    }
}

export const setDriverResetPassword = (data) => dispatch => {
    axios
      .put("/api/driver/auth/forget", data)
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
      }));
}

export const driverLogout = () => dispatch => {
    localStorage.removeItem("jwtDriverToken");
    setAuthToken(false);
    dispatch(setCurrentDriverUserOff());
}

export const setCurrentDriverUserOff = () => {
    return{
        type: SET_CURRENT_DRIVER_USER_OFF
    }
}
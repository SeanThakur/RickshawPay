import axios from 'axios';

import {
    GET_ERROR
} from '../error/types';

import {
    GET_ALL_DRIVERS,
    GET_ALL_DRIVERS_REQUEST,
    SET_RIDE_TO_LOCALSTOREAGE,
    GET_RIDE_CONFIRMATION_DETAILS,
    GET_USER_CURRENT_lOCATION,
    GET_RIDE_BOOKING_STATUS,
    GET_DRIVER_POSITION_INFO
} from './types';

export const getAllDrivers = () => dispatch => {
    dispatch({
        type: GET_ALL_DRIVERS_REQUEST
    });

    axios
      .get(`/api/ride`)
      .then(res => dispatch({
        type: GET_ALL_DRIVERS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
      }));
}

export const setUserLocation = (data) => dispatch => {
  axios
    .post("/api/ride/location", data)
    .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
}

export const getCurrentUserLocation = (id) => dispatch => {
  axios
    .get(`/api/ride/current-location/${id}`)
    .then(res => dispatch({
      type: GET_USER_CURRENT_lOCATION,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: GET_ERROR,
      payload: err.response.data
  }));
}

export const updateUserLocation = (data) => dispatch => {
  axios
    .put("/api/ride/update-location", data)
    .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
}

export const getRideBooked = (data) => dispatch => {
  axios
    .post("/api/ride/booking", data)
    .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
}

export const setRideToLocalStorage = (data) => (dispatch, getState) => {
  dispatch({
      type: SET_RIDE_TO_LOCALSTOREAGE,
      payload: data
  });

  localStorage.setItem('rideToStorage', JSON.stringify(getState().ride.ride));
}

export const getRideConfirmationDetails = (id) => dispatch => {
  axios
    .get(`/api/ride/details/${id}`)
    .then(res => dispatch({
      type: GET_RIDE_CONFIRMATION_DETAILS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
}

export const getBookingCheckedInfo = (u_id) => dispatch => {
  setInterval(() => {
    axios
    .get(`/api/ride/booking-info/${u_id}`)
    .then(res => dispatch({
      type: GET_RIDE_BOOKING_STATUS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
  }, 3000)
}

export const getDriverPosition = (id) => dispatch => {
    axios
    .get(`/api/ride/driver/position/${id}`)
    .then(res => dispatch({
      type: GET_DRIVER_POSITION_INFO,
      payload: res.data.data
    }))
    .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
}
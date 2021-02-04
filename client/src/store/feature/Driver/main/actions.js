import axios from 'axios';

import {
    GET_RIDE_BOOKING_ORDER,
    GET_RIDE_BOOKING_ORDER_REQUEST,
    GET_CURRENT_DRIVER_LOCATION
} from "./types";

import {
    GET_ERROR
} from '../../error/types'

export const getRideBookingDetails = (id) => dispatch => {
    dispatch({
        type: GET_RIDE_BOOKING_ORDER_REQUEST
    });
    setInterval(() => {
        axios
        .get(`/api/driver/main/${id}`)
        .then(res => dispatch({
        type: GET_RIDE_BOOKING_ORDER,
        payload: res.data.data
        }))
        .catch(err => dispatch({
            type: GET_ERROR,
            payload: err.response.data
        }));
    }, 5000)
}

export const setRideBookingDone = (data) => dispatch => {
    axios
      .put(`/api/driver/main/book`, data)
      .catch(err => dispatch({
          type: GET_ERROR,
          payload: err.response.data
      }));
}

export const getDriverLocation = (id) => dispatch => {
    axios
      .get(`/api/driver/main/location/${id}`)
      .then(res => dispatch({
          type: GET_CURRENT_DRIVER_LOCATION,
          payload: res.data.data
      }))
      .catch(err => dispatch({
          type: GET_ERROR,
          payload: err.response.data
      }));
}
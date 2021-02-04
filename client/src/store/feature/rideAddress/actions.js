import {
    SET_RIDE_ADDRESS,
    REMOVE_RIDE_ADDRESS
} from './types';

export const setRideInfo = (data) => (dispatch, getState) => {
    dispatch({
        type: SET_RIDE_ADDRESS,
        payload: data
    });

    localStorage.setItem('rideInfo', JSON.stringify(getState().rideInfo.address));
}

export const removeRideInfo = () => (dispatch) => {
    dispatch({
        type: REMOVE_RIDE_ADDRESS,
    });

    localStorage.removeItem('rideInfo');
}
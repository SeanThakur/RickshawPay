import {
    GET_ALL_DRIVERS,
    GET_ALL_DRIVERS_REQUEST,
    SET_RIDE_TO_LOCALSTOREAGE,
    GET_RIDE_CONFIRMATION_DETAILS,
    GET_USER_CURRENT_lOCATION,
    GET_RIDE_BOOKING_STATUS,
    GET_DRIVER_POSITION_INFO
} from './types';

const initialState = {
    loading: false,
    drivers: [],
    ride: {},
    driverDetails: [],
    userLocation: [],
    rideStatus: {},
    driverPosition: {},
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_ALL_DRIVERS_REQUEST:
            return {
                ...state,
                loading: true,
                drivers: []
            };
        case GET_ALL_DRIVERS:
            return {
                ...state,
                loading: false,
                drivers: action.payload
            };
        case SET_RIDE_TO_LOCALSTOREAGE:
            return {
                ...state,
                ride: action.payload
            };
        case GET_RIDE_CONFIRMATION_DETAILS:
            return {
                ...state,
                driverDetails: action.payload
            };
        case GET_USER_CURRENT_lOCATION:
            return {
                ...state,
                userLocation: action.payload
            };
        case GET_RIDE_BOOKING_STATUS:
            return {
                ...state,
                rideStatus: action.payload
            };
        case GET_DRIVER_POSITION_INFO:
            return {
                ...state,
                driverPosition: action.payload
            };
        default:
            return state;
    }
}
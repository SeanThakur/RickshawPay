import {
    GET_RIDE_BOOKING_ORDER,
    GET_RIDE_BOOKING_ORDER_REQUEST,
    GET_CURRENT_DRIVER_LOCATION
} from "./types";

const initialState = {
    loading: false,
    details : [],
    location: []
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_RIDE_BOOKING_ORDER:
            return {
                ...state,
                loading: false,
                details: action.payload,
            }
        case GET_RIDE_BOOKING_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                details: [],
            }
        case GET_CURRENT_DRIVER_LOCATION:
            return {
                ...state,
                location: action.payload,
            }
        default:
            return state;
    }
}
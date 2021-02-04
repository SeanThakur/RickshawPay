import {
    GET_USER_RIDE_HISTORY,
    GET_USER_RIDE_HISTORY_REQUEST
} from "./types";

const initialState = {
    loading: false,
    rideHistory: []
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_USER_RIDE_HISTORY_REQUEST:
            return {
                ...state,
                loading: true,
                rideHistory: []
            };
        case GET_USER_RIDE_HISTORY:
            return {
                ...state,
                loading: false,
                rideHistory: action.payload
            };
        default:
            return state;
    }
}
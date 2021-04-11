import {
  GET_DRIVER_PROFILE,
  GET_DRIVER_PROFILE_REQUEST  
} from "./types";

const initialState = {
    loading: false,
    driverProfile: []
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_DRIVER_PROFILE:
            return {
                ...state,
                loading: false,
                driverProfile: action.payload,
            }
        case GET_DRIVER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                driverProfile: [],
            }
        default:
            return state;
    }
}
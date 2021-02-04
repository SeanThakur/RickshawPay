import {
    SET_CURRENT_DRIVER_USER,
    SET_CURRENT_DRIVER_USER_OFF
} from "./types";

const initialState = {
    isLogged: false,
    driver : {}
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_CURRENT_DRIVER_USER:
            return {
                ...state,
                isLogged: true,
                driver: action.payload,
            }
        case SET_CURRENT_DRIVER_USER_OFF:
            return {
                ...state,
                isLogged: false,
                driver: {},
            }
        default:
            return state;
    }
}
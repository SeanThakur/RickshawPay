import {
    SET_RIDE_ADDRESS,
    REMOVE_RIDE_ADDRESS
} from './types';

const initialState = {
    address: {}
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_RIDE_ADDRESS:
            return {
                ...state,
                address: action.payload
            };
        case REMOVE_RIDE_ADDRESS:
            return {
                ...state,
                address: {}
            };
        default:
            return state;
    }
}
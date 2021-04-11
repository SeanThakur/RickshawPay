import {
    GET_PASS_INFO,
    GET_PASS_INFO_REQUEST
} from "./types";

const initialState = {
    loading: false,
    passInfo: {}
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_PASS_INFO_REQUEST:
            return {
                ...state,
                loading: true,
                passInfo: {}
            };
        case GET_PASS_INFO:
            return {
                ...state,
                loading: false,
                passInfo: action.payload
            };
        default:
            return state;
    }
}
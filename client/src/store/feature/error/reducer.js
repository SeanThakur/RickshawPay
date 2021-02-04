import {GET_ERROR} from "./types";

const initialState = {}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_ERROR:
            return action.payload;
        default:
            return state;
    }
}
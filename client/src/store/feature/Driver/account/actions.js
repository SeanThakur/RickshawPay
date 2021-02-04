import axios from 'axios';

import {
    GET_ERROR
} from '../../error/types';

export const setDriverAccount = (data) => dispatch => {
    axios
    .post(`/api/driver/account`, data)
    .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
}
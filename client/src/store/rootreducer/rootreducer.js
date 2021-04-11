import {combineReducers} from "redux";

import profileReducer from '../feature/profile/reducer';
import authReducer from '../feature/auth/reducer';
import rideReducer from '../feature/ride/reducer';
import rideInfoReducer from '../feature/rideAddress/reducer';
import PassGenerationReducer from '../feature/passGeneration/reducer';
import driverAuthReducer from '../feature/Driver/auth/reducer';
import driverMainReducer from '../feature/Driver/main/reducer';
import driverProfileReducer from '../feature/Driver/profile/reducer';
import errorReducer from '../feature/error/reducer';

export default combineReducers({
    profile: profileReducer,
    auth: authReducer,
    ride: rideReducer,
    rideInfo: rideInfoReducer,
    passGeneration: PassGenerationReducer,
    driverAuth: driverAuthReducer,
    driverRideInfo: driverMainReducer,
    driverProfile: driverProfileReducer,
    error: errorReducer
});
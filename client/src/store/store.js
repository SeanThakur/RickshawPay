import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootreducer/rootreducer";

const rideInfoFromLocalStorage = localStorage.getItem('rideInfo') ? JSON.parse(localStorage.getItem('rideInfo')) : {}
const rideFromLocalStorage = localStorage.getItem('rideToStorage') ? JSON.parse(localStorage.getItem('rideToStorage')) : {}

const initalState = {
    rideInfo: {
        address : rideInfoFromLocalStorage
    },
    ride: {
        ride : rideFromLocalStorage
    }
};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initalState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
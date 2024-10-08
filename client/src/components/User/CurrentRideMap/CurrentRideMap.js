import React, {useEffect} from 'react'
import './CurrentRideMap.css';
import CurrentMap from './CurrentMap';
import {useDispatch,useSelector} from 'react-redux';
import Navbar from '../Layout/Navbar/Navbar';
import {
    getDriverPosition
} from '../../../store/feature/ride/actions'

function CurrentRideMap() {

    const dispatch = useDispatch();
    const ride = useSelector(state => state.ride);

    useEffect(() => {
        dispatch(getDriverPosition(ride.ride.driver_account_id));
    }, [dispatch,ride.ride.driver_account_id])

    return (
        <>
        <Navbar />
        <div id="ride" className="row">
            <div className="col-lg-12 col-sm-12">
                <div id="map">
                    <CurrentMap
                        latitude={ride.ride.user_latitude}
                        longitude={ride.ride.user_longitude}
                        sourceLat={ride.ride.sourceLat}
                        sourceLng={ride.ride.sourceLng}
                        destinationLat={ride.ride.destinationLat}
                        destinationLng={ride.ride.destinationLng}
                        driverLat={ride?.driverPosition?.latitude}
                        driverLng={ride?.driverPosition?.longitude}
                    />
                </div>
            </div>
        </div> 
    </>
    )
}

export default CurrentRideMap

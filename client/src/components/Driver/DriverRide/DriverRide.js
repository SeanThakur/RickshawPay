import React, {useEffect} from 'react'
import './DriverRide.css'
import DriverRideMap from './DriverRideMap';
import Navbar from '../DriverNavbar/Navbar';
import {useDispatch,useSelector} from 'react-redux';
import {
    getDriverPosition
} from '../../../store/feature/ride/actions';

function DriverRide() {
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
                    <DriverRideMap
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

export default DriverRide
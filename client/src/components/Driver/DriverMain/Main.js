import React , {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import './Main.css';
import Navbar from '../DriverNavbar/Navbar';
import $ from 'jquery'
import {
    setDriverLocation
} from '../../../store/feature/Driver/location/actions';
import {
    getRideBookingDetails,
    setRideBookingDone,
    getDriverLocation
} from '../../../store/feature/Driver/main/actions';

import autoRickshaw from '../../../assets/auto-ricksaw-side.png'
import map from '../../../assets/google-maps.png'

const Main = (props) => {

    const dispatch = useDispatch();
    const driverAuth = useSelector(state => state.driverAuth);
    const driverRideInfo = useSelector(state => state.driverRideInfo);

    const driverAccountId = driverAuth.driver.result[0].id;

    useEffect(() => {
        dispatch(getRideBookingDetails(driverAccountId));
        dispatch(getDriverLocation(driverAccountId));
    }, [dispatch, driverAccountId])

    const [lat, setLat] = useState(''); 
    const [lng, setLng] = useState(''); 
    
    useEffect(() => {
        $(function(){
            $("#flip").on('click',function(){
                $("#panel").slideToggle("slow");
            });
            $("#location").on('click', function(){
                $(this).hide();
            });
        });
    }, []);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function(position) { 
                    setLat(position.coords.latitude);
                    setLng(position.coords.longitude);
                },
                function(error) {
                  console.error("Error Code = " + error.code + " - " + error.message);
                }
            );
          } else {
            console.log("Not Available");
          }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    const clickHandle = (e) => {
        e.preventDefault();
        const data = {
            latitude: lat,
            longitude: lng,
            account_id: driverAccountId
        }
        dispatch(setDriverLocation(data));
        props.history.push('/admin/driver/dashboard')

    }

    const rideBookHandle = (u_id) => {
        const data = {
            u_id: u_id 
        }
        dispatch(setRideBookingDone(data));
        window.location.href = `/admin/driver/ride/${u_id}`
    }
    
    return (
        <div>
            <Navbar />
            {
                driverRideInfo?.location.length === 0 && (
                    <div id="location" onClick={clickHandle} className="mb-2">
                        <img
                            src={map}
                            alt="icon"
                            className="d-inline"
                        />
                        <div className="d-inline">Use Location</div>
                    </div>
                )
            }
            <div className="container">
                <div>
                    {
                        driverRideInfo.loading ? (
                            <div>
                                Loading....
                            </div>
                        ) : driverRideInfo.details.map((d) => (
                            <div className="card mb-3" id="flip" key={d.u_id}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-10">
                                        <div className="h1 city-abbr d-inline mx-2">
                                            {d.source ? d.source.split(',').slice(3, 5).toString() : 'Source'}
                                        </div>
                                        <img 
                                            src={autoRickshaw} 
                                            alt="icon"
                                            className="rickshaw-icon d-inline mx-2"
                                        />
                                        <div className="h1 city-abbr d-inline mx-2">
                                            {d.destination? d.destination.split(',').slice(3, 5).toString() : 'destination'}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <p className="card-text fare-abbr">
                                            {d.price * Number(d.distance.split(' ', [1]))} Rs
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="distance">Distance - {d.distance}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-right">
                                {
                                    d.isBooked ? (
                                        <div className="btn btn-lg btn-disabled btn-info mr-3 disabled">
                                            ride completed
                                        </div>
                                    ) : (
                                        <div className="btn btn-lg btn-book btn-info mr-3" onClick={() => rideBookHandle(d.u_id)}>BOOK</div>
                                    )
                                } 
                            </div>
                        </div>
                        ))
                    }
                </div>   
            </div>
        </div>
    )
}

export default Main

import React , {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import Geocode from "react-geocode";
import haversine from 'haversine-distance'
import './Ride.css';
import {
    getAllDrivers,
    getRideBooked,
    setUserLocation,
    setRideToLocalStorage,
    getCurrentUserLocation,
    updateUserLocation
} from '../../../store/feature/ride/actions';

//Components
import MapWithAMarker from '../Map/MapWithAMarker'
import Navbar from '../Layout/Navbar/Navbar'

//LOGOS
import autoRickshaw from '../../../assets/auto-ricksaw-side.png';
// import autoRickshawIcon from '../../../assets/autoRicksawMapIcon.png';

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyB5n4BFqHd_Skm947FV2Z0EYRxwE0UJ2Ms");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();

const Ride = (props) => {

    const dispatch = useDispatch();
    const ride = useSelector(state => state.ride);
    const rideInfo = useSelector(state => state.rideInfo);
    const auth = useSelector(state => state.auth);

    const userAccountId = auth.user.result[0].id


    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [source] = useState(rideInfo.address.pickup);
    const [destination] = useState(rideInfo.address.destination);
    const [destinationLat, setDestinationLat] = useState('');
    const [destinationLng, setDestinationLng] = useState('');
    const [sourceLat, setSourceLat] = useState('');
    const [sourceLng, setSourceLng] = useState('');
    const [distance, setDistance] = useState('');
    const [driver, setDriver] = useState('');

    const handleDriverSelectChange = (e) => {
        setDriver(e.target.value);
    }

    useEffect(() => {
        dispatch(getAllDrivers());
        dispatch(getCurrentUserLocation(userAccountId));
    }, [dispatch, userAccountId])

    useEffect(() => {
        //Distance in km for two points
        const a = { latitude: sourceLat, longitude: sourceLng}
        const b = { latitude: destinationLat, longitude: destinationLng}
    
        const haversine_km = Math.round(haversine(a, b) / 1000) + ' km';
    
        setDistance(haversine_km);

    }, [sourceLat,sourceLng, destinationLat, destinationLng]);

    //Current Location Permission

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    setLatitude(position.coords.latitude); 
                    setLongitude(position.coords.longitude);  
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

    // Get latitude & longitude from address.
    
    useEffect(() => {
        Geocode.fromAddress(rideInfo.address.pickup).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                setSourceLat(lat);
                setSourceLng(lng);
            },
            error => {
             console.error({
                 SourceError: error
             });
            }
        );
    
        Geocode.fromAddress(rideInfo.address.destination).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                setDestinationLat(lat);
                setDestinationLng(lng);
            },
            error => {
                console.error({
                    DestinationError: error
                });
            }
        );
    }, [rideInfo.address.pickup, rideInfo.address.destination])

    const submitHandler = async (e) => {
        e.preventDefault();
        const locationData = {
            latitude: latitude,
            longitude: longitude,
            account_id: userAccountId
        }
        if(ride?.userLocation.length === 0) {
            dispatch(setUserLocation(locationData));
        }else {
            dispatch(updateUserLocation(locationData));
        }
        const data = {
            source: rideInfo.address.pickup,
            destination: rideInfo.address.destination,
            user_longitude: longitude,
            user_latitude: latitude,
            sourceLat: await sourceLat,
            sourceLng: await sourceLng,
            destinationLat: await destinationLat,
            destinationLng: await destinationLng,
            distance: distance,
            driver_account_id: driver,
            user_account_id: userAccountId,
            u_id: uuidv4().toString()
        }
        await dispatch(getRideBooked(data));
        await dispatch(setRideToLocalStorage(data));
        props.history.push('/ride-confirmation');
    }


    return (
        <>
            <Navbar />
            <div id="ride" className="row">
                <div className="col-lg-4 mb-5">
                    <div id="info">
                        <div className="mt-4">
                            <div className="text-center">
                                <img 
                                    src={autoRickshaw} 
                                    alt="icon" 
                                    height="50"
                                    width="50"
                                />
                            </div>
                            <form onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col mt-3">
                                        <label htmlFor="source">Source:</label>
                                        <input
                                            type="text" 
                                            className="form-control" 
                                            value={source} 
                                            readOnly
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-3">
                                        <label htmlFor="source">Destination: </label>
                                        <input
                                            type="text" 
                                            className="form-control" 
                                            value={destination} 
                                            readOnly
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-2">
                                        <label htmlFor="source">Distance: </label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            value={distance === "NaN km" ? '0 km' : distance}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-2">
                                        <label htmlFor="source">Available auto rickshaw: </label>
                                        <select 
                                            className="form-control"
                                            value={driver}
                                            onChange={handleDriverSelectChange}
                                        >
                                            <option>Available drivers</option>
                                            {
                                                ride.loading ? (
                                                    <option>Loading...</option>
                                                ) : ride.drivers?.map(driver => (
                                                    <option value={driver.id} id={driver.id}>
                                                        {driver.user_name} | Price:- {driver.price}/km
                                                    </option>
                                                ))
                                            }   

                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input 
                                            type="submit" 
                                            value="Book" 
                                            className="btn btn-primary"
                                            style={{float: "right"}}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div id="map">
                        <MapWithAMarker
                            latitude={latitude}
                            longitude={longitude}
                            sourceLat={sourceLat}
                            sourceLng={sourceLng}
                            destinationLat={destinationLat}
                            destinationLng={destinationLng}
                            driverMap={ride.drivers}
                        />
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Ride
import React , {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './rideConfirmation.css';

import {
    getRideConfirmationDetails,
    getBookingCheckedInfo
} from '../../../store/feature/ride/actions';

//LOGOS
import autoRickshaw from '../../../assets/auto-ricksaw-side.png'

const RideConfirmation = (props) => {

    const dispatch = useDispatch();
    const ride = useSelector(state => state.ride);
    const auth = useSelector(state => state.auth);
    const rideInfo = useSelector(state => state.rideInfo);

    useEffect(() => {
        dispatch(getRideConfirmationDetails(ride.ride.driver_account_id));
        dispatch(getBookingCheckedInfo(ride.ride.u_id));
    }, [dispatch, ride?.ride?.driver_account_id, ride.ride.u_id]);

    setInterval(() => {
        if(ride?.rideStatus?.isBooked === 1) {
            window.location.href = `/map/${ride.ride.u_id}`;
        }
    }, 3000);

    const authId = auth?.user?.result[0].id;

    const totalPrice = ride?.driverDetails?.price * Number(ride?.ride?.distance.split(' ', [1]));

    const sourceAddress = rideInfo?.address?.pickup.split(',').slice(0, 3).toString();

    const destinationAddress = rideInfo?.address?.destination.split(',').slice(0, 3).toString();

    return (
        <>
        <div className="row">
            <div className="col m-3">
           <div className="ticket card">
                <div className="ticket-header">
                    <div className="ticket-departure">
                        <h1 className="city-abbr">
                            FROM
                        </h1>
                        <span className="city-name text-uppercase">
                            {
                                sourceAddress
                            }
                        </span>
                        <img 
                            src={autoRickshaw} 
                            alt="icon"
                            className="rickshaw-icon"
                        />
                    </div>
                    <div className="ticket-destination">
                        <h1 className="city-abbr">
                            TO
                        </h1>
                        <span className="city-name text-uppercase">
                            {
                                destinationAddress
                            }
                        </span>
                    </div>
                </div>
                <div className="ticket-body">
                    <div className="row">
                        <div className="col text-left">
                            <h2 className="name">
                                FARE
                            </h2>
                            <span className="value">
                                {
                                    totalPrice
                                } RS
                            </span>
                        </div>
                        <div className="col text-left">
                            <h2 className="name">
                                AUTO ID
                            </h2>
                            <span className="value">
                                #
                                {
                                     ride?.driverDetails?.id
                                }
                            </span>
                        </div>
                        <div className="col text-left">
                            <h2 className="name">
                                TICKET ID
                            </h2>
                            <span className="value">
                                @TK-
                                {
                                   ride?.driverDetails?.driver_account_id  
                                }
                            </span>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="row-vertical">
                                <div className="col item">
                                    <h2 className="name">
                                        AUTO NO
                                    </h2>
                                    <span className="value">
                                       {
                                            ride?.driverDetails?.auto_number
                                       }
                                    </span>
                                </div>
                                <div className="col item">
                                    <h2 className="name">
                                        LICENSE NO
                                    </h2>
                                    <span className="value">
                                        {
                                            ride?.driverDetails?.licence_id
                                        }
                                    </span>
                                </div>
                                <div className="col item">
                                    <h2 className="name">
                                        PASSENGER NO
                                    </h2>
                                    <span className="value">
                                        {authId}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img 
                                src="https://1.bp.blogspot.com/-tWxtTHsnBvQ/Wx0E35ydjVI/AAAAAAAAA6w/SxUTG14Kx8ABJkT4_7S18j4W-Sj5a50YACLcBGAs/s1600/qr.png" 
                                alt="Ticket Code" 
                                className="ticket-qrcode"
                            />
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        </div>
        </>
    )
}

export default RideConfirmation

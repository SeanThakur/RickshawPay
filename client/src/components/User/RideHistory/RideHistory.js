import React, {useEffect} from 'react';
import './RideHistory.css';
import {useDispatch, useSelector} from 'react-redux';
import Navbar from '../Layout/Navbar/Navbar'
import Moment from 'react-moment';
import {
    getRideHistory
} from '../../../store/feature/profile/actions';
import autoRickshaw from '../../../assets/auto-ricksaw-side.png'

const RideHistory = () => {

    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const auth = useSelector(state => state.auth);

    const authId = auth.user.result[0].id;

    useEffect(() => {
        dispatch(getRideHistory(authId));
    }, [dispatch, authId])

    return (
        <>
            <Navbar />
            <div className="p-3 my-2">
                {
                    profile.loading ? (
                        <>
                            Loading ...
                        </>
                    ) : profile.rideHistory.map((his) => (
                        <div className="card mb-3 rideHistory" key={his.id}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h5 
                                            className="card-title d-inline"
                                        >
                                            {his.source.split(',').slice(3, 5).toString()}
                                        </h5>
                                        <img 
                                            className="d-inline mx-4" 
                                            src={autoRickshaw} 
                                            alt="icon" 
                                            height="24px" 
                                            width="24px" 
                                        />
                                        <h5 
                                            className="card-title d-inline"
                                        >
                                            {his.destination.split(',').slice(3, 5).toString()}
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className="card-subtitle my-2 text-muted">Distance: {his.distance}</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className="card-subtitle my-2 text-muted">Fare: { his.price * Number(his.distance.split(' ', [1]))} Rs</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className="card-subtitle my-2 text-muted">Created At: <Moment format="YYYY/MM/DD">{his.created_at}</Moment></h6>
                                    </div>
                                    <div className="col">
                                        <h6 className="card-subtitle my-2 text-muted" 
                                            style={{
                                                float: 'right',
                                                border: '1px solid black',
                                                padding: '10px'
                                            }}
                                        >
                                            {
                                                his.isBooked === 1 ? 'Ride Completed' : 'In Progress' 
                                            }
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default RideHistory

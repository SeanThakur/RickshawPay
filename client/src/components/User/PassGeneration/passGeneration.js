import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import {
    getPass
} from '../../../store/feature/passGeneration/action';
import './passGeneration.css';

const PassGeneration = () => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const passGeneration = useSelector(state => state.passGeneration);

    const profileId = auth?.user?.result[0]?.id;
    const name = auth?.user?.result[0]?.first_name;
    const phoneNumber = passGeneration?.passInfo?.phone_number;
    const fromPlace = passGeneration?.passInfo?.from_place;
    const toPlace = passGeneration?.passInfo?.to_place;
    const fromDate = passGeneration?.passInfo?.from_date;
    const toDate = passGeneration?.passInfo?.to_date;
    const validity = passGeneration?.passInfo?.pass_validity;
    const amount = passGeneration?.passInfo?.amount;

    useEffect(() => {
        dispatch(getPass(profileId));
    }, [profileId, dispatch])

    return (
        <>
            <div id="generatePass">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            <b>Online rickshaw pass generation system</b>
                        </h5>
                        <form className="my-4">
                            <div className="row my-2">
                                <div className="col">
                                    <div className="form-label-group">
                                        <label htmlFor="userName">User name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="name" 
                                            value={name}
                                            readOnly
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-label-group">
                                        <label htmlFor="phoneNumber">Phone number</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="+91 " 
                                            value={phoneNumber}
                                            required
                                            readOnly 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col">
                                    <div className="form-label-group">
                                        <label htmlFor="fromPlace">From Place</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="from" 
                                            value={fromPlace}
                                            required
                                            readOnly 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-label-group">
                                        <label htmlFor="toPlace">To Place</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="to" 
                                            value={toPlace}
                                            required
                                            readOnly 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-md-6">
                                    <div className="form-label-group">
                                        <label htmlFor="fromDate">From Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control" 
                                            value={fromDate}
                                            required
                                            readOnly 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-label-group">
                                        <label htmlFor="toDate">To Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control" 
                                            value={toDate}
                                            required
                                            readOnly 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-label-group my-2">
                                <label htmlFor="inputEmail">Pass Validity</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Pass Validity" 
                                    value={validity}
                                    required
                                    readOnly 
                                />
                            </div>
                            <div className="form-label-group my-2">
                                <label htmlFor="inputPassword">Amount</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Amount" 
                                    value={amount}
                                    required
                                    readOnly 
                                />
                            </div>
                        </form>
                        <p className="text-right mt-3">
                            <NavLink to="/renew-pass">
                                PASS RENEWAL
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PassGeneration

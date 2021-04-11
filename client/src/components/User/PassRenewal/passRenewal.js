import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    setPass
} from '../../../store/feature/passGeneration/action';
import './passRenewal.css';

const PassRenewal = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const name = auth?.user?.result[0]?.first_name;
    const profileId = auth?.user?.result[0]?.id;

    const [phoneNumber, setPhoneNumber] = useState('');
    const [fromPlace, setFromPlace] = useState('');
    const [toPlace, setToPlace] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [amount, setAmount] = useState('');
    const [validity, setValidity] = useState('');

    const PhoneNumberChangeHandler = (e) => {
        e.preventDefault();
        setPhoneNumber(e.target.value)
    }

    const FromPlaceChangeHandler = (e) => {
        e.preventDefault();
        setFromPlace(e.target.value)
    }

    const ToPlaceChangeHandler = (e) => {
        e.preventDefault();
        setToPlace(e.target.value)
    }

    const FromDateChangeHandler = (e) => {
        e.preventDefault();
        setFromDate(e.target.value)
    }

    const ToDateChangeHandler = (e) => {
        e.preventDefault();
        setToDate(e.target.value)
    }

    const AmountChangeHandler = (e) => {
        e.preventDefault();
        setAmount(e.target.value)
    }

    const ValidityChangeHandler = (e) => {
        e.preventDefault();
        setValidity(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            phone_number: phoneNumber,
            from_place: fromPlace,
            to_place: toPlace,
            from_date: fromDate,
            to_date: toDate,
            pass_validity: validity,
            amount: amount,
            profile_id: profileId
        }
        dispatch(setPass(data));
        props.history.push(`/generate-pass`);
    }

    return (
        <>
            <div id="passGeneration">
                <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                <b>Online rickshaw pass generation system</b>
                            </h5>
                            <form className="my-4" onSubmit={submitHandler}>
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
                                                onChange={PhoneNumberChangeHandler}
                                                required 
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
                                                onChange={FromPlaceChangeHandler}
                                                required 
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
                                                onChange={ToPlaceChangeHandler}
                                                required 
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
                                                onChange={FromDateChangeHandler}
                                                required 
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
                                                onChange={ToDateChangeHandler}
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-label-group my-2">
                                    <label htmlFor="inputPassword">Amount</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Amount" 
                                        value={amount}
                                        onChange={AmountChangeHandler}
                                        required 
                                    />
                                </div>
                                <div className="form-label-group my-2">
                                    <label htmlFor="years">Validity</label>
                                    <select value={validity} onChange={ValidityChangeHandler} className="form-control">
                                        <option>Select Dates</option>
                                        <option>1 Month</option>
                                        <option>3 Month</option>
                                        <option>6 Month</option>
                                    </select>
                                </div>
                                <button 
                                    className="btn btn-primary btn-block text-uppercase" 
                                    type="submit"
                                    onSubmit={submitHandler}
                                >
                                    generate pass
                                </button>
                            </form>
                        </div>
                </div>
            </div>
        </>
    )
}

export default PassRenewal

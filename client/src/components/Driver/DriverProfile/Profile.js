import React, {useState} from 'react'
import './Profile.css';
import {useDispatch, useSelector} from 'react-redux';
import Navbar from '../DriverNavbar/Navbar';
import {
    setDriverProfile
} from '../../../store/feature/Driver/profile/actions';

const Profile = (props) => {

    const dispatch = useDispatch();
    const driverAuth = useSelector(state => state.driverAuth);

    const driverAccountId = driverAuth.driver.result[0].id

    const [aadharCard, setAadharCard] = useState('');
    const [panCard, setPanCard] = useState('');
    const [autoNumber, setAutoNumber] = useState('');
    const [licenceId, setLicenceId] = useState('');
    const [price, setPrice] = useState('');

    const handleAadharCardChange = (e) => {
        setAadharCard(e.target.value);
    }

    const handlePanCardChange = (e) => {
        setPanCard(e.target.value);
    }

    const handleAutoNumberChange = (e) => {
        setAutoNumber(e.target.value);
    }

    const handleLicenceIdChange = (e) => {
        setLicenceId(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            aadhar_card: aadharCard,
            pan_card: panCard,
            auto_number: autoNumber,
            licence_id: licenceId,
            price: price,
            driver_account_id: driverAccountId,
        }
        dispatch(setDriverProfile(data));
        props.history.push('/admin/driver/dashboard')
    }

    return (
        <>
            <Navbar />
            <div className="global-container">
                <div className="card login-form">
                    <div className="card-body">
                        <h3 className="card-title text-center">Create Profile</h3>
                        <div className="card-text">
                            <form onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="aadharCard">Aadhar Card</label>
                                            <input 
                                                type="number" 
                                                className="form-control form-control-sm text-uppercase" 
                                                placeholder="****"
                                                value={aadharCard}
                                                onChange={handleAadharCardChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="panCard">Pan Card</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm text-uppercase" 
                                                placeholder="****" 
                                                value={panCard}
                                                onChange={handlePanCardChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="autoNumber">Auto Number</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-sm text-uppercase" 
                                        placeholder="*** ***" 
                                        value={autoNumber}
                                        onChange={handleAutoNumberChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="licenceId">Licence Id</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-sm text-uppercase" 
                                        placeholder="*****" 
                                        value={licenceId}
                                        onChange={handleLicenceIdChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price for 1 km</label>
                                    <input 
                                        type="number" 
                                        className="form-control form-control-sm text-uppercase" 
                                        placeholder="eg:- 40 rupees" 
                                        value={price}
                                        onChange={handlePriceChange}
                                        required
                                    />
                                </div>
                                <input 
                                    type="submit"
                                    value="NEXT"
                                    className="btn btn-primary btn-block"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile

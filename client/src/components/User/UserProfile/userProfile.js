import React ,{useState} from 'react'
import {useDispatch} from 'react-redux';
import './userProfile.css';

import {
    setNewProfile
} from '../../../store/feature/profile/actions';

//Logos
import Logo from '../../../assets/destination.png';

const UserProfile = () => {
    const dispatch = useDispatch();
    // const error = useSelector(state => state.error);
    // const profile = useSelector(state => state.profile);

    // const {phoneDetail} = profile;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value);
    }

    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    // const phoneNumberChangeHandler = (e) => {
    //     setPhoneNumber(e.target.value);
    // }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const confirmPasswordChangeHandler = (e) => {
        setConfirmPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(getPhoneDetails(phoneNumber));
        if(password === confirmPassword) {
            const data = {
                first_name: firstName,
                last_name : lastName,
                email : email,
                password: password
            }
            dispatch(setNewProfile(data));
            setError('')
            window.location.href = '/login';
        } else {
            setError('Password not matched')
        }
        
    }

    return (
        <>
            <div id="userProfile">
                <div className="text-center">
                    <div>
                        <img 
                            src={Logo}
                            alt="logo"
                            height="50"
                            width="50"
                        />
                    </div>
                    <p className="discription">Add your details for your profile</p>
                </div>
                <div className="my-3">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={firstName}
                                        onChange={firstNameChangeHandler}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="LastName">Last Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        value={lastName}
                                        onChange={lastNameChangeHandler}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control"
                                        value={email}
                                        onChange={emailChangeHandler}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        value={phoneNumber}
                                        onChange={phoneNumberChangeHandler}
                                        required
                                    />
                                    {
                                        phoneDetail.success ? (
                                            <p className="text-info">{
                                                phoneDetail.message
                                            }</p>
                                        ) : (
                                            <p className="text-danger">{
                                                error.phoneError
                                            }</p>
                                        )
                                    }
                                </div>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control"
                                        value={password}
                                        onChange={passwordChangeHandler}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    type="password" 
                                    placeholder="****"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={confirmPasswordChangeHandler}
                                    required
                                />
                                <p className="text-danger">
                                    {
                                        error
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                        <input 
                            type="submit" 
                            value="NEXT" 
                            className="btn btn-primary btn-block"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserProfile

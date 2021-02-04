import React , {useState} from 'react'
import './createAccount.css'
import {useDispatch} from 'react-redux';
import {
    setPhoneNumbers
} from '../../../store/feature/phoneNumber/actions';

//LOGOS
import Logo from '../../../assets/destination.png';

const CreateAccount = () => {
    const dispatch = useDispatch();
    // const phone = useSelector(state => state.phone);

    const [phoneNumber, setPhone] = useState('');

    const phoneNumberChangeHandler = (e) => {
        setPhone(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        //  dispatch(getPhoneCount(phoneNumber));
         const data = {
            number: phoneNumber
        }
        //const myData = JSON.parse(data);
        dispatch(setPhoneNumbers(data));
        window.location.href = '/profile'
        // if(phone.phoneCount === 0) {
           
        //     window.location.href = '/login'
        // }else {
        //     const data = {
        //         phone: phoneNumber
        //     }
        //     dispatch(setPhoneNumbers(data));
        //      window.location.href = '/profile'
        // }
    }

    return (
        <>
            <div id="createAccount" className="text-center">
                <p>
                    <img 
                        src={Logo}
                        alt="logo"
                        height="50"
                        width="50"
                    />
                </p>
                <div>
                    <div className="intro">GET MOVING</div>
                    <div className="discription">Enter Your Phone Number</div>
                </div>
                <form className="my-4" onSubmit={submitHandler}>
                    <div className="row">
                        <div className="mx-auto formArea">                           
                            <div className="card d-flex flex-row text-center p-2">+91 </div>   
                            <div className="p-2"></div>
                            <input 
                                type="text" 
                                placeholder="****" 
                                className="form-control"
                                value={phoneNumber}
                                onChange={phoneNumberChangeHandler}
                                required
                            />
                        </div>
                    </div>
                    <input 
                        type="submit"
                        value="NEXT"
                        className="btn btn-primary btn-block"
                    />
                </form>
            </div>
        </>
    )
}

export default CreateAccount

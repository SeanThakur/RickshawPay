import React from 'react'
import './createAccount.css'

//LOGOS
import Logo from '../../../assets/destination.png';

const createAccount = () => {
    return (
        <>
            <div id="createAccount" class="text-center">
                <p>
                    <img 
                        src={Logo}
                        alt="logo"
                        height="50"
                        width="50"
                    />
                </p>
                <div>
                    <div class="intro">GET MOVING</div>
                    <div class="discription">Enter Your Phone Number</div>
                </div>
                <div class="my-4">
                    <div class="row">
                        <div class="mx-auto formArea">                           
                            <div class="card d-flex flex-row text-center p-2">91</div>   
                            <div class="p-2"></div>
                            <input type="number" placeholder="842******" class="form-control"/>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary btn-block">NEXT</button>
            </div>
        </>
    )
}

export default createAccount

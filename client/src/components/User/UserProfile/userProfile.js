import React from 'react'
import './userProfile.css';

//Logos
import Logo from '../../../assets/destination.png';

const userProfile = () => {
    return (
        <>
            <div id="userProfile">
                <div class="text-center">
                    <div>
                        <img 
                            src={Logo}
                            alt="logo"
                            height="50"
                            width="50"
                        />
                    </div>
                    <p class="discription">Add your details to create account</p>
                </div>
                <div class="my-4">
                    <form>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="firstName">First Name</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="LastName">Last Name</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" />
                                    </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <input 
                    type="submit" 
                    value="NEXT" 
                    class="btn btn-primary btn-block"
                />
            </div>
        </>
    )
}

export default userProfile

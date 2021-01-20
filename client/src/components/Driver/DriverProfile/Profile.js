import React from 'react'
import './Profile.css';
import Navbar from '../DriverNavbar/Navbar'
;
const Profile = () => {
    return (
        <>
            <Navbar />
            <div class="global-container">
                <div class="card login-form">
                    <div class="card-body">
                        <h3 class="card-title text-center">Create Profile</h3>
                        <div class="card-text">
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Aadhar Card</label>
                                            <input type="text" class="form-control form-control-sm" placeholder="****" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Pan Card</label>
                                            <input type="text" class="form-control form-control-sm" placeholder="****" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Auto Number</label>
                                    <input type="text" class="form-control form-control-sm" placeholder="*** ***" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Licence Id</label>
                                    <input type="text" class="form-control form-control-sm" placeholder="*****" />
                                </div>
                                <button type="submit" class="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile

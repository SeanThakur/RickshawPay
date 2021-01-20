import React from 'react'
import './passGeneration.css';

const passGeneration = () => {
    return (
        <>
            <div id="generatePass">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">
                            <b>Online rickshaw pass generation system</b>
                        </h5>
                        <form class="my-4">
                            <div class="row my-2">
                                <div class="col">
                                    <div class="form-label-group">
                                        <label for="userName">User name</label>
                                        <input type="text" class="form-control" placeholder="name" required />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-label-group">
                                        <label for="phoneNumber">Phone number</label>
                                        <input type="number" class="form-control" placeholder="+91 " required />
                                    </div>
                                </div>
                            </div>
                            <div class="row my-2">
                                <div class="col">
                                    <div class="form-label-group">
                                        <label for="fromPlace">From Place</label>
                                        <input type="text" class="form-control" placeholder="from" required />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-label-group">
                                        <label for="toPlace">To Place</label>
                                        <input type="number" class="form-control" placeholder="to" required />
                                    </div>
                                </div>
                            </div>
                            <div class="row my-2">
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="fromDate">From Date</label>
                                        <input type="date" class="form-control" required />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="toDate">To Date</label>
                                        <input type="date" class="form-control" required />
                                    </div>
                                </div>
                            </div>
                            <div class="form-label-group my-2">
                                <label for="inputEmail">Pass Validity</label>
                                <input type="text" class="form-control" placeholder="Pass Validity" required />
                            </div>
                            <div class="form-label-group my-2">
                                <label for="inputPassword">Amount</label>
                                <input type="number" class="form-control" placeholder="Amount" required />
                            </div>
                        </form>
                        <p class="text-right mt-3">
                            <a href="/">
                                PASS RENEWAL
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default passGeneration

import React from 'react'
import './bookARide.css';

const bookARide = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div id="map">Map</div>
                    </div>
                </div>
                <div class="row card my-5">
                    <div class="col card-body">
                        <div class="row my-2">
                            <div class="col-1">
                                Pick Up
                            </div>
                            <div class="col-11">
                                B-5 A/B, Mahakali Caves Rd, Gundavali, Andheri East, Mumbai, Maharashtra 400093
                            </div>
                        </div>
                        <div class="row my-2">
                            <div class="col-1">
                                Drop
                            </div>
                            <div class="col-11">
                                GYAN ASHRAM CAMPUS, MAHAKALI CAVES ROAD, Andheri - Kurla Rd, Mumbai, 400093
                            </div>
                        </div>
                        <div class="row my-2">
                            <div class="col-1">
                                Fare
                            </div>
                            <div class="col-11">
                                50 Rs
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row card my-5">
                    <div class="col card-body">
                        <div class="row">
                            <div class="col-1">
                                Pay by
                            </div>
                            <div class="col-11">
                                Options
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <button class="btn btn-primary text-center">Book A Ride</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default bookARide

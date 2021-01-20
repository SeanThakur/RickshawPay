import React from 'react'
import './rideConfirmation.css';

//LOGOS
import autoRickshaw from '../../../assets/auto-ricksaw-side.png'

const rideConfirmation = () => {
    return (
        <>
           <div class="ticket card">
                <div class="ticket-header">
                    <div class="ticket-departure">
                        <h1 class="city-abbr">
                            FROM
                        </h1>
                        <span class="city-name">
                            ANDHERI
                        </span>
                        <img 
                            src={autoRickshaw} 
                            alt="icon"
                            class="rickshaw-icon"
                        />
                    </div>
                    <div class="ticket-destination">
                        <h1 class="city-abbr text-left">
                            TO
                        </h1>
                        <span class="city-name">
                            HOLY FAMILY
                        </span>
                    </div>
                </div>
                <div class="ticket-body">
                    <div class="row">
                        <div class="col text-left">
                            <h2 class="name">
                                FARE
                            </h2>
                            <span class="value">
                                50 RS
                            </span>
                        </div>
                        <div class="col text-left">
                            <h2 class="name">
                                AUTO ID
                            </h2>
                            <span class="value">
                                #254-6523-965
                            </span>
                        </div>
                        <div class="col text-left">
                            <h2 class="name">
                                TICKET ID
                            </h2>
                            <span class="value">
                                @TK-8468846
                            </span>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-6">
                            <div class="row-vertical">
                                <div class="col item">
                                    <h2 class="name">
                                        AUTO NO
                                    </h2>
                                    <span class="value">
                                        8431681684658
                                    </span>
                                </div>
                                <div class="col item">
                                    <h2 class="name">
                                        AUTO NO
                                    </h2>
                                    <span class="value">
                                        8431681684658
                                    </span>
                                </div>
                                <div class="col item">
                                    <h2 class="name">
                                        PASSENGER NO
                                    </h2>
                                    <span class="value">
                                        8695712365
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <img 
                                src="https://1.bp.blogspot.com/-tWxtTHsnBvQ/Wx0E35ydjVI/AAAAAAAAA6w/SxUTG14Kx8ABJkT4_7S18j4W-Sj5a50YACLcBGAs/s1600/qr.png" 
                                alt="Ticket Code" 
                                class="ticket-qrcode"
                            />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default rideConfirmation

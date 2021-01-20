import React , {useEffect} from 'react'
import './Main.css';
import Navbar from '../DriverNavbar/Navbar';
import $ from 'jquery'

const Main = () => {
    
    useEffect(() => {
        $(function(){
            $("#flip").on('click',function(){
                $("#panel").slideToggle("slow");
            });
        });
    }, [])
    
    return (
        <div>
            <Navbar />
            <div class="container">
                <div>
                    <div class="card" id="flip">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-10">
                                    <h5 class="card-title">Card From To Destination</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card Timing</h6>
                                </div>
                                <div class="col-2">
                                    <p class="card-text">Fare.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="panel">
                        <div class="row text-center">
                            <div class="col">Done</div>
                            <div class="col">Busy</div>
                            <div class="col">Ignore</div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Main

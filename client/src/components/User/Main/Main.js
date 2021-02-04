import React, {useState, useRef, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './Main.css'

//Actions
import {
    setRideInfo
} from '../../../store/feature/rideAddress/actions';

//Components
import Navbar from '../Layout/Navbar/Navbar'
import Footer from '../Layout/Footer/Footer'

// Images
import Rickshaw from '../../../assets/rickshaw2.png';
import tea from '../../../assets/tea.png';
import rupee from '../../../assets/rupee.png';
import creditCard from '../../../assets/credit-card.png';
import logo from '../../../assets/telegram logo.png';
import placeholder from '../../../assets/placeholder.png';
import ridePocket from '../../../assets/Ride for Every Pocket.jpg';
import rickshaw3 from '../../../assets/rickshaw3.jpg';
import cashless from '../../../assets/Cashless transaction.jpg';
import explore from '../../../assets/explore.jpg';

//Google map autocomplete integration
let autoComplete;
let autoComplete2;

const loadScript = (url, callback, callback2) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
        callback2();
      }
    };
  } else {
    script.onload = () => {
        callback();
        callback2();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    {
        componentRestrictions: { country: "IN" }
    }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
}


function handleScriptLoad2(updateQuery, autoCompleteRef) {
  autoComplete2 = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    {
        componentRestrictions: { country: "IN" }
    }
  );
  autoComplete2.setFields(["address_components", "formatted_address"]);
  autoComplete2.addListener("place_changed", () =>
    handlePlaceSelect2(updateQuery)
  );
}

async function handlePlaceSelect2(updateQuery) {
  const addressObject = autoComplete2.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
}


const Main = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const [pickup , setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const pickUpAutoCompleteRef = useRef(null);
    const destinationAutoCompleteRef = useRef(null);

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyB5n4BFqHd_Skm947FV2Z0EYRxwE0UJ2Ms&libraries=places`,
            () => handleScriptLoad(setPickup, pickUpAutoCompleteRef),
            () => handleScriptLoad2(setDestination, destinationAutoCompleteRef)
        );
    }, [])

    const handlePickupChange = (e) => {
        setPickup(e.target.value);
    }

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            pickup,
            destination
        }
        dispatch(setRideInfo(data));
        if(auth.isAuth) {
            props.history.push(`/current-ride`)
        } else {
            props.history.push("/profile")
        }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                {/* Section 1 */}
                <div id="introduction" className="my-5">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img 
                                src={Rickshaw}  
                                alt="Rickshaw" 
                                height="60%"
                                width="60%"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-6 mt-5 d-none d-md-block">
                            <div>
                                <div className="auto">Auto</div>
                                <div className="auto-intro lead">Get an Auto at your doorstep</div>
                            </div>
                            <div className="my-2 lead">
                                The all too familiar auto ride, minus the hassle of waiting and haggling for price, A convenient way to travel everyday
                            </div>
                            <div className="mt-3">
                                <span className="pr-2">
                                        <img 
                                            src={tea} 
                                            alt="Enter pickup location"
                                            height="38"
                                            width="41"
                                        />
                                </span>
                                <span className="pr-2">
                                        <img 
                                            src={rupee} 
                                            alt="Enter pickup location"
                                            height="38"
                                            width="41"
                                        />
                                </span>
                                <span className="pr-2">
                                        <img 
                                            src={creditCard} 
                                            alt="Enter pickup location"
                                            height="38"
                                            width="41"
                                        />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Section 2  */}
                <form id="BookARide" className="card px-3 my-5" onSubmit={submitHandler}>
                    <div className="text-center">
                        <div className="request mt-3">Request a ride now</div>
                        <p className="lead">Your everyday travel partner</p>
                    </div>
                    <div className="mb-3 text-center p-3">
                        <div className="row p-1 my-2">
                            <div className="col-1">
                                <span>
                                    <img 
                                        src={logo} 
                                        alt="Enter pickup location"
                                        height="25"
                                        width="25"
                                    /> 
                                </span>
                            </div>
                            <div className="col-11">
                                <input 
                                    type="text" 
                                    placeholder="Enter pickup location" 
                                    className="form-control"
                                    value={pickup}
                                    onChange={handlePickupChange}
                                    ref={pickUpAutoCompleteRef}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row p-1">
                            <div className="col-1">
                                <span>
                                    <img 
                                        src={placeholder} 
                                        alt="Enter destination"
                                        height="30"
                                        width="30"
                                    /> 
                                </span>
                            </div>
                            <div className="col-11">
                                <input 
                                    type="text" 
                                    placeholder="Enter destination" 
                                    className="form-control"
                                    value={destination}
                                    onChange={handleDestinationChange}
                                    ref={destinationAutoCompleteRef}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-right mb-3 pr-3">
                        <button className="btn btn-dark">
                            Book
                        </button>
                    </div>
                </form>
                 {/* Section 3  */}
                <div id="WhyRideWithUs" className="my-5">
                    <div className="mt-3">
                        <div className="intro">Why ride with us?</div>
                        <div className="intro-discription">The best way to travel to your destination</div>
                    </div>
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <div className="row">
                                    <div className="d-flex flex-row">
                                        <span className="p-3">
                                            <img 
                                                src={ridePocket} 
                                                alt="Ride for every pocket"
                                                height="100"
                                                width="130"
                                            />
                                        </span>
                                        <div className="p-3">
                                            <div className="title">Ride for every pocket</div>
                                            <div className="title-description lead">
                                                From local  to other travelling occasions, we have ride to suit every pocket
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div className="row">
                                    <div className="d-flex flex-row">
                                        <span className="p-3">
                                            <img 
                                                src={rickshaw3} 
                                                alt="Secure and safar Rides"
                                                height="100"
                                                width="100"
                                                className="ml-1"
                                            />
                                        </span>
                                        <div className="p-3">
                                            <div className="title">Secure and Safer Rides</div>
                                            <div className="title-description lead">
                                                Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6 text-left">
                                <div className="row">
                                    <div className="d-flex flex-row">
                                        <span className="p-3">
                                            <img 
                                                src={cashless} 
                                                alt="Chasless Rides"
                                                height="100"
                                                width="130"
                                            />   
                                        </span>
                                        <div className="p-3">
                                            <div className="title">Chasless Rides</div>
                                            <div className="title-description lead">
                                                Now go cashless and travel easy. Simply pay using UPI to enjoy hassle free payments.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div className="row">
                                    <div className="d-flex flex-row">
                                        <span className="p-3">
                                            <img 
                                                src={explore} 
                                                alt="Generate and Explore"
                                                height="100"
                                                width="130"
                                            />   
                                        </span>
                                        <div className="p-3">
                                            <div className="title">Generate and Explore</div>
                                            <div className="title-description lead">
                                                To travel with the lowest fares, generate pass for a faster travel experience. Choose your ride and zoom away!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Main

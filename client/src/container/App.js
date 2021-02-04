import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from '../store/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../helpers/setAuthToken';
import {
  setCurrentUser,
  Logout
} from '../store/feature/auth/actions';
import {
  driverLogout,
  setCurrentDriverUser
} from '../store/feature/Driver/auth/actions';
import PrivateRoute from '../helpers/PrivateRoute';
import DriverPrivateRoute from '../helpers/DriverPrivateRoute';

//Hustler Component Import
import Main from '../components/User/Main/Main'
// import CreateAccount from '../components/User/CreateAccount/createAccount'
import UserProfile from '../components/User/UserProfile/userProfile'
import PassGeneration from '../components/User/PassGeneration/passGeneration'
import PassRenewal from '../components/User/PassRenewal/passRenewal'
import RideConfirmation from '../components/User/RideConfirmation/rideConfirmation'
import Ride from '../components/User/Ride/Ride'
import Login from '../components/User/Login/Login';
import ForgetPassword from '../components/User/ForgetPassword/ForgetPassword';
import CurrentRideMap from '../components/User/CurrentRideMap/CurrentRideMap';
import RideHistory from '../components/User/RideHistory/RideHistory';

//Driver Component Import
import DriverLogin from '../components/Driver/DriverLogin/Login'
import DriverProfile from '../components/Driver/DriverProfile/Profile'
import DriverAccount from '../components/Driver/DriverAccount/Account'
import DriverMain from '../components/Driver/DriverMain/Main';
import DriverForgetPassword from '../components/Driver/DriverForgetPassword/ForgetPassword';
import DriverRide from '../components/Driver/DriverRide/DriverRide';

// Error Component Import
import Error from '../components/Error/error';

//User Auth Setup
if(localStorage.jwtToken)
{
  //Checking if token present in localstorage then login persist
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  //logout the user
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime)
  {
    store.dispatch(Logout());
    window.location.href = '/';
  }
}

//Driver Auth Setup
if(localStorage.jwtDriverToken)
{
  //Checking if token present in localstorage then login persist
  setAuthToken(localStorage.jwtDriverToken);
  const decoded = jwt_decode(localStorage.jwtDriverToken);
  store.dispatch(setCurrentDriverUser(decoded));
  //logout the user
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime)
  {
    store.dispatch(driverLogout());
    window.location.href = '/';
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            {/* Hustler Routes */}
            <Route path="/" component={Main} exact/>
            {/* <Route path="/account" component={CreateAccount} exact/> */}
            <Route path="/profile" component={UserProfile} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/forget-password" component={ForgetPassword} exact/>
            {/* Drivers Routes */}
            <Route path="/admin/driver/account" component={DriverAccount} exact/>
            <Route path="/admin/driver/login" component={DriverLogin} exact/>
            <Route path="/admin/driver/forget-password" component={DriverForgetPassword} exact/>
            {/* Hustler PrivateRoute Routes */}
            <PrivateRoute path="/generate-pass" component={PassGeneration} exact/>
            <PrivateRoute path="/renew-pass" component={PassRenewal} exact/>
            <PrivateRoute path="/ride-confirmation" component={RideConfirmation} exact/>
            <PrivateRoute path="/current-ride" component={Ride} exact/>
            <PrivateRoute path="/map/:u_id" component={CurrentRideMap} exact/>
            <PrivateRoute path="/ride-history" component={RideHistory} exact/>
              {/* Drivers PrivateRoute Routes */}
            <DriverPrivateRoute path="/admin/driver/profile" component={DriverProfile} exact/>
            <DriverPrivateRoute path="/admin/driver/dashboard" component={DriverMain} exact/>
            <DriverPrivateRoute path="/admin/driver/ride/:u_id" component={DriverRide} exact/>
            {/* 404 Error Page */}
            <Route path='*' component={Error}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

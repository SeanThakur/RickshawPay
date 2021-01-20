import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from '../store/store';

//Hustler Component Import
import Main from '../components/User/Main/Main'
import CreateAccount from '../components/User/CreateAccount/createAccount'
import UserProfile from '../components/User/UserProfile/userProfile'
import PassGeneration from '../components/User/PassGeneration/passGeneration'
import PassRenewal from '../components/User/PassRenewal/passRenewal'
import RideConfirmation from '../components/User/RideConfirmation/rideConfirmation'
import BookARide from '../components/User/BookARide/bookARide'

//Driver Component Import
import DriverLogin from '../components/Driver/DriverLogin/Login'
import DriverProfile from '../components/Driver/DriverProfile/Profile'
import DriverAccount from '../components/Driver/DriverAccount/Account'
import DriverMain from '../components/Driver/DriverMain/Main';

// Error Component Import
import Error from '../components/Error/error';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            {/* Hustler Routes */}
            <Route path="/" component={Main} exact/>
            <Route path="/account" component={CreateAccount} exact/>
            <Route path="/profile" component={UserProfile} exact/>
            <Route path="/generate-pass" component={PassGeneration} exact/>
            <Route path="/renew-pass" component={PassRenewal} exact/>
            <Route path="/ride-confirmation" component={RideConfirmation} exact/>
            <Route path="/ride-book" component={BookARide} exact/>
            {/* Drivers Routes */}
            <Route path="/admin/driver/login" component={DriverLogin} exact/>
            <Route path="/admin/driver/profile" component={DriverProfile} exact/>
            <Route path="/admin/driver/account" component={DriverAccount} exact/>
            <Route path="/admin/driver/dashboard" component={DriverMain} exact/>
            {/* 404 Error Page */}
            <Route path='*' component={Error}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

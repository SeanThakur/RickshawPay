import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//bodyParser

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//midleware

app.use(express.json());

//Router
import profile from './router/Hustler/profile.js';
import auth from './router/Hustler/auth.js';
import ride from './router/Hustler/ride.js';
import DriverAccount from './router/Driver/account.js';
import DriverAuth from './router/Driver/auth.js';
import DriverProfile from './router/Driver/profile.js';
import DriverLocation from './router/Driver/location.js';
import DriverMain from './router/Driver/main.js';

app.use('/api/profile', profile);
app.use('/api/auth', auth);
app.use('/api/ride', ride);
app.use('/api/driver/account', DriverAccount);
app.use('/api/driver/auth', DriverAuth);
app.use('/api/driver/profile', DriverProfile);
app.use('/api/driver/location', DriverLocation);
app.use('/api/driver/main', DriverMain);

//Port to listen

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
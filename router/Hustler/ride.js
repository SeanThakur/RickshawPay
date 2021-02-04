import express from 'express';
const router = express.Router();
import auth from '../../config/tokenVerification.js';

import ride from '../../controller/Hustler/ride.controller.js';

router.get('/', ride.allDrivers);
router.get('/details/:driver_account_id', ride.getRideConfirmationDetails);
router.post('/booking', ride.setRide);
router.post('/location', ride.setLocation);
router.put('/update-location', ride.updateLocation);
router.get('/current-location/:account_id', ride.fetchUserLocation);
router.get('/booking-info/:u_id', ride.getBookingCheckedInfo);
router.get('/driver/position/:account_id', ride.getDriverPosition);

export default router;
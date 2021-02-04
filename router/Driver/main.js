import express from 'express';
const router = express.Router();

import auth from '../../config/tokenVerification.js';

import driver from '../../controller/Driver/main.controller.js';

router.get('/:driver_account_id', driver.driverRide);
router.get('/location/:driver_id', driver.driverLocation);
router.put('/book', driver.driverBookRide);

export default router;
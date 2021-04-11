import express from 'express';
const router = express.Router();

import auth from '../../config/tokenVerification.js';

import driverProfile from '../../controller/Driver/profile.controller.js';

router.post('/', auth.authToken, driverProfile.profile);
router.get('/get/:driver_account_id', auth.authToken, driverProfile.getProfile);

export default router;
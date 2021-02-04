import express from 'express';
const router = express.Router();

import auth from '../../config/tokenVerification.js';

import driverProfile from '../../controller/Driver/profile.controller.js';

router.post('/', auth.authToken, driverProfile.profile);

export default router;
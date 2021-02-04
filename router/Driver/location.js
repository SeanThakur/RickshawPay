import express from 'express';
const router = express.Router();
import auth from '../../config/tokenVerification.js';

import location from '../../controller/Driver/location.controller.js'

router.post('/', auth.authToken, location.location)

export default router;
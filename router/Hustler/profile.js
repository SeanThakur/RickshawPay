import express from 'express';
const router = express.Router();
import profile from '../../controller/Hustler/profile.controller.js'

router.post('/', profile.profile)
router.get('/ride-history/:account_id', profile.rideHistory)

export default router;
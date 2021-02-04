import express from 'express';
const router = express.Router();
import auth from '../../controller/Hustler/auth.controller.js';

router.post('/', auth.login);
router.put('/forget', auth.forgetPassword);

export default router;
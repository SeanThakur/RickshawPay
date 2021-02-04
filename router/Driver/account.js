import express from 'express';
const router = express.Router();
import account from '../../controller/Driver/account.controller.js'

router.post('/', account.account)

export default router;
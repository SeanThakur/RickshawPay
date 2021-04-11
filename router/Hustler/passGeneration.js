import express from 'express';
const router = express.Router();
import passGenerate from '../../controller/Hustler/passGenerate.controller.js'

router.post('/generate', passGenerate.setPass);
router.get('/get/:profile_id', passGenerate.getPass);

export default router;
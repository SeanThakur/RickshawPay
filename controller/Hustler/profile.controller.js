import profile from '../../service/Hustler/profile.service.js';
import bcrypt from 'bcrypt';

export default {
    profile: (req,res) => {
        const body = req.body;
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(body.password, salt);
        profile.profileQuery(body, (err, result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Error :- ${err}`
                });
            } else if(result) {
                return res.status(200).json({
                    success: true,
                    data: result
                });
            }
        })
    },
    rideHistory: (req,res) => {
        const body = req.params;
        profile.rideHistoryQuery(body, (err, result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Error :- ${err}`
                });
            } else if(result) {
                return res.status(200).json({
                    success: true,
                    data: result
                });
            }
        })
    }
}
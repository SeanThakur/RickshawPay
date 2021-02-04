import auth from '../../service/Hustler/auth.service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default {
    login: (req, res) => {
        const body = req.body;
        auth.auth(body, (err, result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Error :- ${err}`
                });
            }
            const results = bcrypt.compare(body.password, result.password);
            if(results) {
               result.password = undefined;
                const token = jwt.sign({result}, 'Vik@Sala', {
                    expiresIn: '12h'
                });
                res.status(200).json({
                    auth: result.length > 0 && {
                        success: true,
                        token: token
                    }
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: "invalid email and password",
                });
            }
        });
    },
    forgetPassword: (req,res) => {
        const body = req.body;
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(body.password, salt);
        auth.forgetPassword(body, (err, result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Error :- ${err}`
                });
            } else if(result) {
                return res.status(200).json({
                    auth: result.affectedRows === 0 ? {
                        success: false,
                        message: 'Invalid Email'
                    } : {
                        success: true,
                        data: result
                    }
                }); 
            }
        })
    }
}
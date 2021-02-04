import account from '../../service/Driver/account.service.js'
import bcrypt from 'bcrypt';

export default {
    account: (req,res) => {
        const body = req.body;
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(body.password, salt);
        account.accountQuery(body, (err, result) => {
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
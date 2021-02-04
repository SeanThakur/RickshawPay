import pool from '../../config/database.js';

export default {
    auth: (data, callback) => {
        const authQuery = `
        SELECT 
           *
        FROM profile 
        WHERE profile.email = ?`;
        pool.query(
            authQuery,
            [
                data.email
            ],
            (err, result) => {
                if(err) {
                    return callback(err);
                }else {
                    return callback(null, result)
                }
            }
        )
    },
    forgetPassword: (data, callback) => {
        const forgetPasswordQuery = `
        UPDATE profile SET profile.password = ? WHERE profile.email = ?
        `;
        pool.query(
            forgetPasswordQuery,
            [
                data.password,
                data.email
            ],
            (err, result) => {
                if(err) {
                    return callback(err);
                }else {
                    return callback(null, result)
                }
            }
        )
    }
}
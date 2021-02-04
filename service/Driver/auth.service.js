import pool from '../../config/database.js';

export default {
    DriverAuth: (data, callback) => {
        const authQuery = `
            SELECT * FROM driver_account WHERE driver_account.email = ?
        `;
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
    DriverForgetPassword: (data, callback) => {
        const forgetPasswordQuery = `
            UPDATE driver_account SET driver_account.password = ? WHERE driver_account.email = ?
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
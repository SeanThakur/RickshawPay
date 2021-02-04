import pool from '../../config/database.js';

export default {
    accountQuery: (data, callback) => {
        const accountQuery = `
        INSERT INTO driver_account(user_name, email, password) VALUES(?,?,?);
        `;
        pool.query(
            accountQuery,
            [
                data.user_name, 
                data.email,
                data.password
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
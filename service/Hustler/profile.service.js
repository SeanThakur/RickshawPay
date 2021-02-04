import pool from '../../config/database.js';

export default {
    profileQuery: (data, callback) => {
        pool.query(
            'insert into profile(first_name, last_name, email, password) values (?,?,?,?)',
            [
                data.first_name, 
                data.last_name, 
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
    },
    rideHistoryQuery: (data, callback) => {
        pool.query(
            'SELECT * FROM ride JOIN driver_profile ON driver_profile.driver_account_id = ride.driver_account_id WHERE ride.user_account_id = ?',
            [
                data.account_id
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
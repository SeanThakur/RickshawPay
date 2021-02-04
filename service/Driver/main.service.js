import pool from '../../config/database.js';

export default {
    driverRideQuery : (data, callback) => {
        const query = `
        SELECT * FROM 
        ride 
        JOIN driver_profile 
        ON ride.driver_account_id = driver_profile.driver_account_id 
        WHERE ride.driver_account_id = ?
        `;
        pool.query(
            query,
            [
                data.driver_account_id
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
    driverRideBookedQuery : (data, callback) => {
        const query = `
            UPDATE ride SET isBooked = true WHERE u_id = ?
        `;
        pool.query(
            query,
            [
                data.u_id
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
    driverLocationQuery: (data, callback) => {
        const query = `
            SELECT * FROM driver_location WHERE account_id = ?
        `;
        pool.query(
            query,
            [
                data.driver_id
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
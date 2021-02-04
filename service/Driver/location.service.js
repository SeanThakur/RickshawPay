import pool from '../../config/database.js';

export default {
    locationQuery: (data, callback) => {
        const query = `
        INSERT INTO driver_location(latitude, longitude, account_id) VALUES(?,?,?)
        `;
        pool.query(
            query,
            [
                data.latitude,
                data.longitude,
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
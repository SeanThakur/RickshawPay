import pool from '../../config/database.js';

export default {
    profileQuery : (data, callback) => {
        const query = `
            INSERT INTO 
            driver_profile 
            (aadhar_card, pan_card, auto_number, licence_id, price, driver_account_id) 
            VALUES (?, ?, ?, ?, ?, ?);
        `;
        pool.query(
            query,
            [
                data.aadhar_card,
                data.pan_card,
                data.auto_number,
                data.licence_id,
                data.price,
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
    }
}
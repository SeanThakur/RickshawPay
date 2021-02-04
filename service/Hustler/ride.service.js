import pool from '../../config/database.js';

export default {
    getAllDrivers: (callback) => {
        const allQuery = `
        SELECT 
            driver_account.id, 
            driver_account.user_name, 
            driver_profile.price, 
            driver_location.longitude, 
            driver_location.latitude 
        FROM driver_account 
        JOIN driver_profile 
            ON driver_account.id = driver_profile.driver_account_id 
        JOIN driver_location 
            ON driver_profile.driver_account_id = driver_location.account_id
        `
        pool.query(
            allQuery,
            [],
            (err, result) => {
                if(err) {
                    return callback(err);
                }else {
                    return callback(null, result)
                }
            }
        )
    },
    setLocations : (data, callback) =>{
        const locationQuery = `
            INSERT INTO user_location(latitude, longitude, account_id) VALUES(?,?,?)
        `
        pool.query(
            locationQuery,
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
    },
    updateUserLocations : (data, callback) =>{
        const locationQuery = `
            UPDATE user_location SET user_location.latitude = ?, user_location.longitude = ? WHERE user_location.account_id = ?
        `
        pool.query(
            locationQuery,
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
    },
    getUserLocations : (params, callback) =>{
        const locationQuery = `
            SELECT * FROM user_location WHERE user_location.account_id = ?
        `
        pool.query(
            locationQuery,
            [
                params.account_id
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
    setRide: (data, callback) => {
        const rideQuery = `
        INSERT INTO ride(
            source,
            destination,
            user_latitude, 
            user_longitude, 
            sourceLat, 
            sourceLng, 
            destinationLat, 
            destinationLng, 
            distance, 
            driver_account_id, 
            user_account_id,
            u_id
        ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)
        `
        pool.query(
            rideQuery,
            [
                data.source,
                data.destination,
                data.user_latitude,
                data.user_longitude,
                data.sourceLat,
                data.sourceLng,
                data.destinationLat,
                data.destinationLng,
                data.distance,
                data.driver_account_id,
                data.user_account_id,
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
    rideConfirmation: (data, callback) => {
        const rideConfirmationQuery = `SELECT * FROM driver_profile WHERE driver_account_id = ?`;
        pool.query(
            rideConfirmationQuery,
            [
                data.driver_account_id
            ],
            (err, result) => {
                if(err) {
                    return callback(err);
                }else {
                    return callback(null, result[0])
                }
            }
        )
    },
    rideBookingCheckedQuery: (data, callback) => {
        const Query = `SELECT * FROM ride WHERE u_id = ?`;
        pool.query(
            Query,
            [
                data.u_id
            ],
            (err, result) => {
                if(err) {
                    return callback(err);
                }else {
                    return callback(null, result[0])
                }
            }
        )
    },
    getDriverPositionQuery: (data, callback) => {
        const Query = `SELECT * FROM driver_location WHERE driver_location.account_id = ?`;
        pool.query(
            Query,
            [
                data.account_id
            ],
            (err, result) => {
                if(err) {
                    return callback(err);
                }else {
                    return callback(null, result[0])
                }
            }
        )
    }
}
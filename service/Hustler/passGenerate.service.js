import pool from '../../config/database.js';

export default {
    GeneratePass: (data, callback) => {
        const passQuery = `
            INSERT INTO 
            pass_generation(
                pass_generation.phone_number, 
                pass_generation.from_place, 
                pass_generation.to_place, 
                pass_generation.from_date, 
                pass_generation.to_date, 
                pass_generation.pass_validity, 
                pass_generation.amount,
                pass_generation.profile_id
            ) VALUES(?,?,?,?,?,?,?,?);
        `;
        pool.query(
            passQuery,
            [
                data.phone_number,
                data.from_place,
                data.to_place,
                data.from_date,
                data.to_date,
                data.pass_validity,
                data.amount,
                data.profile_id
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
    GetPass: (data, callback) => {
        const passQuery = `
            SELECT * FROM pass_generation WHERE pass_generation.profile_id = ?;
        `;
        pool.query(
            passQuery,
            [
                data.profile_id
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
}
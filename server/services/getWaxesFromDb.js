// getWaxesFromDb.js
const db = require('../db/index.js'); // import the db connection pool 

async function getWaxesByTemperature(temperature) {
    // db query goes here
    try {
        const response = await db.query(
            'SELECT * FROM waxes WHERE min_temperature <= $1 AND max_temperature >= $1', 
            [temperature]
        );
        console.log('response.rows from db: ', response.rows);
        return response.rows;
    } catch (err) {
        console.error('err.stack, Error executing qurey: ', err.stack);
        throw err; // keeps the error stack trace and origingal error type
    }
}

module.exports = getWaxesByTemperature;


    //     let waxRecommendation = 'unknown';

//     if(temperature >= 30) {
//         waxRecommendation = 'pink'; // Search db for warm wax
//     } else if (temperature > 10 && temperature <= 30 ) {
//         waxRecommendation = 'blue';// search db for moderate wax
//     } else if (temperature > 30) {
//         waxRecommendation = 'green';// search db for warm wax
//     }
//     // return wax to front 
//     return waxRecommendation;
// }

// module.exports = getWaxes


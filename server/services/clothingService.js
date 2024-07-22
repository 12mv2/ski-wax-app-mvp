const db = require('../db/index.js');

async function getClothingByTemperature(temperature) {
    try {
        const response = await db.query(
            'SELECT * FROM clothing WHERE $1 BETWEEN min_temperature AND max_temperature',
            [temperature]
        );
        if (response.rows.length === 0) {
            throw new Error('No clothing items found for the given temperature');
        }
        return response.rows;
    } catch (err) {
        console.error('Error executing query:', err.stack);
        throw new Error('Failed to fetch clothing data');
    }
}

module.exports = getClothingByTemperature;

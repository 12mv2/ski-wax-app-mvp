// getWaxesFromDb.js


const getWaxes = async(temperature) => {
    // db query goes here

    let waxRecommendation = 'unknown';

    if(temperature >= 30) {
        waxRecommendation = 'pink'; // Search db for warm wax
    } else if (temperature > 10 && temperature <= 30 ) {
        waxRecommendation = 'blue';// search db for moderate wax
    } else if (temperature > 30) {
        waxRecommendation = 'green';// search db for warm wax
    }
    // return wax to front 
    return waxRecommendation;
}

module.exports = getWaxes


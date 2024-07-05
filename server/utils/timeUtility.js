// utils/timeUtility.js

const roundedHour = (time) => {
    // const [hours, minutes] = time.split(':')
    const [hours, minutes] = time.split(':').map(Number) // ex: '11:11' -> [11, 11]
    if (minutes >= 30) {
        return hours + 1;
    }
    return hours;
}

module.exports = roundedHour;

// console.log(roundedHour('11:11')) // -> 1

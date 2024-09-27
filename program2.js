function romanToInt(s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    let prevValue = 0;

    for (let char of s) {
        const currentValue = romanMap[char];
        total += currentValue;

        // If the previous value is less than the current value,
        // subtract double the previous value (it was added once already)
        if (prevValue < currentValue) {
            total -= 2 * prevValue;
        }

        prevValue = currentValue;
    }

    return total;
}

module.exports = { romanToInt }; // Ensure this line is included to export the function




module.exports={romanToInt}
const Solution = require('./romanToInt');

describe('Roman to Integer Tests', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('convert III to 3', () => {
        expect(solution.romanToInt("III")).toBe(3);
    });

    test('convert LVIII to 58', () => {
        expect(solution.romanToInt("LVIII")).toBe(58);
    });

    test('convert MCMXCIV to 1994', () => {
        expect(solution.romanToInt("MCMXCIV")).toBe(1994);
    });

    test('convert single roman digit X to 10', () => {
        expect(solution.romanToInt("X")).toBe(10);
    });

    test('convert MMXXIII to 2023', () => {
        expect(solution.romanToInt("MMXXIII")).toBe(2023);
    });

    test('convert MMMCMXCIX to 3999', () => {
        expect(solution.romanToInt("MMMCMXCIX")).toBe(3999);
    });
});


module.exports={romanToInt}

function isValid(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in bracketMap) {
            // If the current character is a closing bracket
            const topElement = stack.pop(); // Get the last element from the stack
            if (bracketMap[char] !== topElement) {
                return false; // Not matching
            }
        } else {
            // If it’s an opening bracket, push onto stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets matched correctly
    return stack.length === 0;
}
module.exports = (isValid)
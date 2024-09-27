
var isValid = function(s) {
    const stack = [];
        const mapping = {
            '(': ')',
            '{': '}',
            '[': ']'

        };
        for (let char of s) {
            // If the character is one of the opening brackets, push it onto the stack
            if (mapping[char]) {
                stack.push(char);
            } else {
                // If the stack is empty or the top of the stack doesn't match the closing bracket, return false
                if (stack.length === 0 || mapping[stack.pop()] !== char) {
                    return false;
                }
            }
        }
    
        // If the stack is empty, all opening brackets were matched
        return stack.length === 0;
    }
    
    // Accept input from the user
    let userInput = prompt("Enter a string of parentheses:");

    console.log(isValid(userInput));
    
    


module.exports = { isValid };



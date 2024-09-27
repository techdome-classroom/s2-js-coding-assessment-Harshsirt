
 function(s) {
    const stack = [];
        const mapping = {
            '(': ')',
            '{': '}',
            '[': ']'

      };
        for (let char of s) {

            if (mapping[char]) {
                stack.push(char);
            } else {
              
                if (stack.length === 0 || mapping[stack.pop()] !== char) {
                    return false;
                }
            }
        }
    
   
        return stack.length === 0;
    }
    

    let userInput = prompt("Enter a string of parentheses:");

    console.log(isValid(userInput));
    
    


module.exports = { isValid };



module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let isStrCorrect = true;  
    
        for(let i = 0; i < str.length; i++) {
            let currentSymbol = str[i];
        
            for(let n = 0; n < bracketsConfig.length; n++) {

                if(stack.length && bracketsConfig[n][0] === stack[stack.length-1] && bracketsConfig[n][1] === currentSymbol) {
                    stack.pop();
                    break;
                } else if(bracketsConfig[n][0] === currentSymbol) {
                    stack.push(currentSymbol);
                    break;
                } else if(!stack.length && bracketsConfig[n][1] === currentSymbol) {
                    isStrCorrect = false;
                    break;
                }   
                
            }

        } 
    return stack.length === 0 && isStrCorrect; 
}
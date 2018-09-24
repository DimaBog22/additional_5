module.exports = function check(str, bracketsConfig) { 
    const openedBrackets = []; 
    const closedBrackets = []; 
    const universalBrackets = []; 
    const result = [] 

    bracketsConfig.forEach(brackets => { 
    if (brackets[0] == brackets[1]) { 
         universalBrackets.push(brackets[0]) 
    } else { 
         openedBrackets.push(brackets[0]); 
         closedBrackets.push(brackets[1]); 
    } 
    }); 
        
    let index = -1; 

     for (let i = 0; i < str.length; i++) { 
        if (openedBrackets.indexOf(str[i]) != -1) { 
            result.push(str[i]); 
            continue; 
        } 
        
        index = closedBrackets.indexOf(str[i]); 

        if (index != -1) { 
            if (result[result.length - 1] === openedBrackets[index]) { 
            result.pop(); 
            continue; 
        } else { 
        return false; 
        } 
        } 
        
        index = universalBrackets.indexOf(str[i]); 

        if (index != -1) { 
        if (result[result.length - 1] === universalBrackets[index]) { 
        result.pop(); 
        } else { 
            result.push(str[i]); 
        } 
    }  
    } 
        
    return result.length === 0; 
}
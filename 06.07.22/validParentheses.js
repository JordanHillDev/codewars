// Valid Parentheses

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

//P: string of parentheses <= 100
//R: true if only contains valid sets of parentheses

function validParentheses(parens) {
    const splitStr = parens.split("");

    let i = 0;
    let count = splitStr.length;

    while (i < count) {
        if (splitStr[0] === ")") break;
        if (splitStr.indexOf("(") < splitStr.indexOf(")")) {
            splitStr.splice(splitStr.indexOf("("), 1);
            splitStr.splice(splitStr.indexOf(")"), 1);
        }
        i++;
    }

    return splitStr.length === 0;
}

//E:
validParentheses("(()())"); //true
validParentheses("()())"); //false
validParentheses(")()())"); //false

//clever solution 
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }
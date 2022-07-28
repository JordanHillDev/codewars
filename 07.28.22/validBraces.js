// Valid Braces

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces) {
    parenScore = [0, 0, 0];

    let iter = 0;

    while (iter < braces.length && parenScore.every((el) => el >= 0)) {
        console.log(parenScore, braces[iter])

        switch (braces[iter]) {
            case "(":
                parenScore[0] += 1;
                break;
            case ")":
                parenScore[0] -= 1;
                break;
            case "[":
                parenScore[1] += 1;
                break;
            case "]":
                parenScore[1] -= 1;
                break;
            case "{":
                parenScore[2] += 1;
                break;
            case "}":
                parenScore[2] -= 1;
                break;
        }

        ++iter;
    }

    return parenScore.every((el) => el === 0);
}


//actual solution 
function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;
  
    for (var i=0; i<braces.length; i++) {
        console.log(stack)
      currentChar = braces[i];
  
      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // any unclosed braces left?
  }
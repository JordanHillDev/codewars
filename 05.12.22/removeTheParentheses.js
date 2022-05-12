// Remove the parentheses
// Remove the parentheses
// In this kata you are given a string for example:

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.

function removeParentheses(s) {
    const sentence = s.split("");
    const leftPar = sentence.indexOf("(");
    const rightPar = sentence.lastIndexOf(")");

    return sentence.filter((char, i) => i < leftPar || i > rightPar).join("");
}

// better solution that accounts for multiple sets of parentheses

function removeParentheses(s){
    let r = 0
    let x = ''
    for (let c of s) {
      if (c=='(') r++
      if (r==0) x+=c
      if (c==')') r--
    }
    return x
  }
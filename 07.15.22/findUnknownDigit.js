// Find the unknown digit

// To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

// You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

// The professor will give you a simple math expression, of the form

// [number][op][number]=[number]
// He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

// Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

// Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.

//P: expression as a string that uses +, -, or * and has multiple ?'s that are all same number with no leading 0's
//R: lowest number to fill in ?'s and make equation correct or -1

function solveExpression(exp) {
    console.log(exp);
    const operands = ["+", "-", "*", "="];
    const numsInExp = [];
    const opersInExp = [];

    const splitExp = exp.split("");
    let tempStr = "";

    for (let i = 0; i < splitExp.length; i++) {
        //split[i] === operand
        if (operands.includes(splitExp[i])) {
            if (
                (splitExp[i] === "-" && !Number.isInteger(+splitExp[i - 1])) ||
                (splitExp[i] === "-" && splitExp[i - 1] === "?")
            ) {
                tempStr += splitExp[i];
            } else {
                opersInExp.push(splitExp[i]);
                numsInExp.push(tempStr);
                tempStr = "";
            }
        }
        //add current char to tempStr
        else {
            tempStr += splitExp[i];
            //if index is last number push to numsInExp
            if (i === splitExp.length - 1) numsInExp.push(tempStr);
        }
    }

    let numThatWorks = [];
    const numSet = [...new Set(numsInExp.join(""))];

    for (let i = 0; i <= 9; i++) {
        const numsReplaced = numsInExp.map((num) =>
            Number(num.replace(/\?/g, i))
        );

        console.log(numsReplaced);

        if (
            numsReplaced.some(
                (num) =>
                    (String(num).length > 1 && String(num).split("")[0] == 0) ||
                    numSet.includes(String(i))
            )
        )
            continue;

        let fullStatement = false;
        switch (opersInExp[0]) {
            case "+":
                fullStatement =
                    numsReplaced[0] + numsReplaced[1] === numsReplaced[2];
                break;
            case "-":
                fullStatement =
                    numsReplaced[0] - numsReplaced[1] === numsReplaced[2];
                break;
            case "*":
                fullStatement =
                    numsReplaced[0] * numsReplaced[1] === numsReplaced[2];
                break;
        }

        if (fullStatement) numThatWorks.push(i);
    }
    console.log(numThatWorks);
    return numThatWorks.length === 0 ? -1 : numThatWorks[0];
}

solveExpression("1+1=?"); // => 2
solveExpression("123*45?=5?088"); // => 6
solveExpression("-5?*-1=5?"); // => 0
solveExpression("19--45=5?"); // => -1



//much simpler solution that actually works
function solveExpression(exp) {
    exp = exp.replace('=','==').replace('--','+');
    for(var i = 0; i < 10; i++){
      if(eval(exp.replace(/\?/g,i)) && !exp.includes(i)){
          if(!/^00+$/.test(exp.replace(/\?/g,i).split('==')[1]))  return i;
      }
    }
    return -1;
  }
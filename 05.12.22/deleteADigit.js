// Simple Fun #79: Delete a Digit

// Task
// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.

// Input/Output
// [input] integer n

// Constraints: 10 ≤ n ≤ 1000000.

// [output] an integer

function deleteDigit(n) {
    const stringN = String(n);
    const possibleNums = [];

    for (let i = 0; i < stringN.length; i++) {
        let slicedNum = stringN.slice(0, i) + stringN.slice(i + 1);
        possibleNums.push(slicedNum);
    }

    return +possibleNums.sort((a, b) => b - a)[0];
}

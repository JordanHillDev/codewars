// Shortest steps to a number

// Summary:
// Given a number, num, return the shortest amount of steps it would take from 1, to land exactly on that number.

// Description:
// A step is defined as either:

// Adding 1 to the number: num += 1
// Doubling the number: num *= 2
// You will always start from the number 1 and you will have to return the shortest count of steps it would take to land exactly on that number.

// 1 <= num <= 10000

// Examples:

// num == 3 would return 2 steps:

// 1 -- +1 --> 2:        1 step
// 2 -- +1 --> 3:        2 steps

// 2 steps
// num == 12 would return 4 steps:

// 1 -- +1 --> 2:        1 step
// 2 -- +1 --> 3:        2 steps
// 3 -- x2 --> 6:        3 steps
// 6 -- x2 --> 12:       4 steps

// 4 steps
// num == 16 would return 4 steps:

// 1 -- +1 --> 2:        1 step
// 2 -- x2 --> 4:        2 steps
// 4 -- x2 --> 8:        3 steps
// 8 -- x2 --> 16:       4 steps

// 4 steps

//P: whole number above 0
//R: whole number as amount of steps to add or multiply by 2 from 1 to number

function shortestStepsToNum(num) {
    // counter for each step taken
    let stepsTaken = 0;

    while (num > 1) {
        if (num % 2) {
            num -= 1;
            stepsTaken++;
        }

        if (Number.isInteger(num / 2)) {
            num = num / 2;
            stepsTaken++;
        }
    }

    return stepsTaken;
}

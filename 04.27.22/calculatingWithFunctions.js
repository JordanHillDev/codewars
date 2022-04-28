// Calculating with Functions

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

const zero = (func) => (!func ? 0 : func(0));
const one = (func) => (!func ? 1 : func(1));
const two = (func) => (!func ? 2 : func(2));
const three = (func) => (!func ? 3 : func(3));
const four = (func) => (!func ? 4 : func(4));
const five = (func) => (!func ? 5 : func(5));
const six = (func) => (!func ? 6 : func(6));
const seven = (func) => (!func ? 7 : func(7));
const eight = (func) => (!func ? 8 : func(8));
const nine = (func) => (!func ? 9 : func(9));

const plus = (num) => (otherNum) => Math.trunc(otherNum + num);
const minus = (num) => (otherNum) => Math.trunc(otherNum - num);
const times = (num) => (otherNum) => Math.trunc(otherNum * num);
const dividedBy = (num) => (otherNum) => Math.trunc(otherNum / num);

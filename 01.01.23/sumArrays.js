// given array of numbers

// return sum of all numbers

function sum(numbers) {
    "use strict";

    return numbers.reduce((acc, curr) => acc + curr, 0)
}
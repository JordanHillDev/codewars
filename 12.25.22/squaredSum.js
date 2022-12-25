// given array of numbers
// return sqaured numbers added together

function squareSum(numbers) {
    return numbers.reduce((acc, curr) => {
        return acc += Math.pow(curr, 2)
    }, 0)
}
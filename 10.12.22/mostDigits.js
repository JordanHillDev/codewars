// Most digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
    return array.reduce((acc, curr) => {
        if (curr.toString().length > acc.toString().length) return (acc = curr);
        return acc;
    });
}

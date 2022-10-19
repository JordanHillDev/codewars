// Get Average

// get non-empty array of integers 

// return average of array integers as whole integer

function getAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc += curr, 0)

    return Math.floor(sum / arr.length)
}

console.log(getAverage([2, 2, 2, 2]), '2')
console.log(getAverage([1, 2, 3, 4, 5]), '3')
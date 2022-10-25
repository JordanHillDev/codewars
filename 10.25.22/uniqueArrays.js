// given array of arrays of numbers

// return unique arrays formed by picking one element from each subarray

function numOfUnique(arr) {
    let arraySets = arr.map(ea => [...new Set(ea)])
    let numOfUniqueSets = arraySets.reduce((acc, curr) => acc * curr.length, 1)
    return numOfUniqueSets
}

console.log(numOfUnique([[1, 2], [4], [5, 6]]), 4)
console.log(numOfUnique([[1, 2], [3, 4], [5, 6]]), 8)
console.log(numOfUnique([[1, 2], [4, 4], [5, 6]]), 4)
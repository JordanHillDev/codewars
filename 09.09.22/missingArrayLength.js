// Length of missing array

// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays.length === 0 || arrayOfArrays === null) return 0;
    if (arrayOfArrays.includes((arr) => arr.length === 0)) return 0;
    const sortedArrays = arrayOfArrays.sort((a, b) => a.length - b.length);
    let missingLength;
    for (let i = 0; i < sortedArrays.length - 1; i++) {
        if (sortedArrays[i + 1].length !== sortedArrays[i].length + 1)
            missingLength = sortedArrays[i + 1].length - 1;
    }
    if (missingLength === undefined) missingLength = sortedArrays[0].length - 1;
    return missingLength;
}

//better solution
function getLengthOfMissingArray(arrayOfArrays) {
    const lengths = (arrayOfArrays || [])
        .map((a) => (a ? a.length : 0))
        .sort((a, b) => a - b);

    if (lengths.includes(0)) {
        return 0;
    }

    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) {
            return lengths[i] + 1;
        }
    }

    return 0;
}

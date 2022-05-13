// PREP

// P: array of 3 numbers
// R: index of number in between the other two


function gimme(triplet) {
// sort the array
const sorted = triplet.slice(0).sort((a, b) => a - b)
// find index of middle number
// return indexOf middle number
return triplet.indexOf(sorted[1])
}

gimme([2, 3, 1]) // 0
gimme([5, 10, 14]) // 1
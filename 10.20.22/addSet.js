// Given array of integers
// Return sum of numbers that appear only once

function addNonRepeats(arr) {
    let filtered = arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))

    return arr.reduce((acc, curr) => acc += curr, 0)
}


function addNonRepeats(arr) {
    return arr.reduce((acc, curr) => {
        if(arr.lastIndexOf(curr) === arr.indexOf(curr)) return acc += curr
        else return acc
    }, 0)
}
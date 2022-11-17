// given array of strings of same letter types that differ in length
// return new array where each element is equal to average lengths of previous array

function makeAverageLength(arr) {
    //find average length by reducing all length and dividing by original arr length
    //round average
    //map array and return string made of 1st char average number of times

    const averageLength = Math.round(arr.reduce((acc, curr) => acc += curr.length, 0) / arr.length)

    return arr.map(str => Array(averageLength).fill(str[0]))
}

console.log(makeAverageLength(['aa', 'bbb', 'cccc']), '["aaa", "bbb", "ccc"]')
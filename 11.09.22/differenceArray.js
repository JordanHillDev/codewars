// receive two arrays of numbers
// return list a without values that are present in list b

function difference(arr1, arr2) {
    return arr1.filter(num => !arr2.includes(num))
}

console.log(difference([1, 2, 2, 3], [2]), '[1, 3]')
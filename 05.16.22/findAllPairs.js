// Find all pairs

// You are given array of integers, your task will be to count all pairs in that array and return their count.

// Notes:

// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
// Examples
// [1, 2, 5, 6, 5, 2]  -->  2
// ...because there are 2 pairs: 2 and 5

// [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
// ...because there are 4 pairs: 2, 20, 6 and 2 (again)

// P: array that can be empty, one value, or multiple values
// R: return number of pairs, or 0 if array is empty or only one value

function duplicates(array) {
    // return 0 if array length <= 1
    if (array.length <= 1) return 0;
    // make empty array for matches 
    let matches = []
    // loop through and push numbers that match but index is higher
    for(let i = 0; i < array.length; i++) {
        if(array.includes(array[i], i + 1)) {
            matches.push(array[i])
            array.splice(array.lastIndexOf(array[i]), 1)
        }
    }

    return matches.length;

}

duplicates([1, 2, 5, 6, 5, 2]); //=> 2
duplicates([]); // => 0

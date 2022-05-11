// Longest sequence with zero sum

// Write a method which takes an array of integers (positive and negative) and returns the longest contiguous sequence in this array, which total sum of elements equal 0.

// For example:
// maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])

// Should return [92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.

const maxZeroSequence = function (arr) {
    let possibleSolutions = [];

    for (let i = 0; i < arr.length; i++) {
        let total = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            total += arr[j];
            if (total === 0) {
                possibleSolutions.push(arr.slice(i, j + 1));
            }
        }
    }
    if(possibleSolutions.length === 0) return []
    return possibleSolutions.reduce((acc, curr) => {
       return curr.length > acc.length ? curr : acc
    })
};
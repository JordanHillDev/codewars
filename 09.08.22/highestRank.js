// Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//P: array of numbers
//R: number that occurs most often. If tie, return higher number

function highestRank(arr) {
    const count = (num) => arr.filter((el) => el === num).length;

    return arr.reduce((acc, curr) => {
        if(count(curr) === count(acc)) return acc = curr > acc ? curr : acc;
        if(count(curr) > count(acc)) return acc = curr;
        return acc
    })
}

highestRank([2, 4, 5, 3, 3, 2, 2]); // => 2
highestRank([2, 3, 5, 3, 3, 2, 2]); // => 3

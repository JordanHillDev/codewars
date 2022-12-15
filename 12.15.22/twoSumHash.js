// given array of numbers

// return all pairs as arrays that add up to a given sum...numbers can be used more than once

function twoSum(arr, num) {
    const numsNeeded = {};
    const pairs = [];

    for (let i = 0; i < arr.length; i++) {
        let numberNeeded = num - arr[i];

        if (numsNeeded[arr[i]]) pairs.push([arr[i], numberNeeded]);

        numsNeeded[numberNeeded] = arr[i];
    }

    return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), "[[2, 2], [3, 1]]");

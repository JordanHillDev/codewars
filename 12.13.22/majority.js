// given array of nums
// return element that appears more than half of the time

function isMajority(arr) {
    arr = arr.sort((a, b) => a - b);
    const hash = {};
    const majorityAmount = Math.ceil(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        hash[num] ? hash[num]++ : (hash[num] = 1);
        if (hash[num] >= majorityAmount) return num;
    }
}

console.log(isMajority([3, 2, 3]), 3);
console.log(isMajority([2, 2, 1, 1, 1, 2, 2]), 2);

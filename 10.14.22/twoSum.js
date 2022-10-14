// Two Sum

// nums of integers and an integer target ([1, 2, 3...], int)

// return indices of two numbers that add up to target

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let numNeeded = target - nums[i];
        if (nums.includes(numNeeded, i + 1))
            return [i, nums.indexOf(numNeeded, i + 1)];
    }
}

console.log(twoSum([1, 4, 2, 7], 6), "[1, 2]");
console.log(twoSum([1, 4, 2, 5, 8], 9), "[0, 4]");

//much faster solution

const twoSum = (nums, target) => {
    const hashtable = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (hashtable.hasOwnProperty(complement)) {
            return [hashtable[complement], i];
        }

        hashtable[nums[i]] = i;
    }

    return null;
};

console.log(twoSum([1, 4, 2, 7], 6), "[1, 2]");
console.log(twoSum([1, 4, 2, 5, 8], 9), "[0, 4]");
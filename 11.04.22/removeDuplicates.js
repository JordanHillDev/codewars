// given array of integers
// return number of original numbers and sorted array with only one of each integer at beginning and '_' at end of array for each duplicate

function removeDuplicates(arr) {
    arr = arr.sort((a, b) => a - b)
    let counter = 0;
    let dupsRemovedArr = []

    for(let i = 0; i < arr.length; i++) {
        if(!dupsRemovedArr.includes(arr[i])) {
            dupsRemovedArr[counter] = arr[i]
            counter++
        } else {
            dupsRemovedArr.push('_')
        }
    }

    return counter, dupsRemovedArr
}

console.log(removeDuplicates([1, 1, 2]), '2, [1, 2, _]')
console.log(removeDuplicates([1, 3, 4, 2, 1, 2]), '4, [1, 2, 3, 4, _, _]')


//actual solution 
var removeDuplicates = function (nums) {
    // Length of the updated array
    let count = 0;
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        // We will update the array in place
        nums[count] = nums[i];
        count++;
    }
    return count;
};
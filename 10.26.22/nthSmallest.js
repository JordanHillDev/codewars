// given array of integers and integer ([3, 5, 2, 1], n)
// return nth smallest element

function nthSmallest(arr, n) {
    arr = arr.sort((a, b) => a - b);
    return arr[n - 1];
}

console.log(nthSmallest([3, 4, 2, 1], 2), 2);
console.log(nthSmallest([3, 4, 2, 1], 3), 3);

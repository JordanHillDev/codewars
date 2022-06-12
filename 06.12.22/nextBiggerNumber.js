// Next bigger number with the same digits

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

//solution that works but is too slow
function nextBigger(n) {
    let finalArr = permutate(n);

    function permutate(n) {
        let numString = n.toString();
        if (numString.length < 2) return numString;

        let permutationsArr = [];

        for (let i = 0; i < numString.length; i++) {
            let char = numString[i];

            let remainingChars =
                numString.slice(0, i) +
                numString.slice(i + 1, numString.length);

            for (let permutation of permutate(remainingChars)) {
                permutationsArr.push(char + permutation);
            }
        }
        return permutationsArr;
    }

    finalArr = finalArr.map((str) => Number(str));
    finalArr.sort((a, b) => a - b);

    if (finalArr.lastIndexOf(n) === finalArr.length - 1) return -1;

    return finalArr[finalArr.lastIndexOf(n) + 1];
}

//not a solution that works but good practice slicing
function nextBigger(n) {
    let numStr = n.toString();

    let higherNumber;

    for (let i = numStr.length; i >= 2; i--) {
        let tempStrBefore = numStr.slice(0, i - 2);
        let tempStrAfter = numStr.slice(i, numStr.length);
        let [a, b] = numStr.slice(i - 2, i).split("");
        higherNumber = tempStrBefore + b + a + tempStrAfter;

        if (+higherNumber > n) i = 0;
    }

    if (+higherNumber > n) return +higherNumber;
    else {
        return -1;
    }
}

//actual solution

const sortedDigits = (n) => {
    let arr = n.toString().split("");
    arr.sort((a, b) => b - a);
    return arr;
};

function nextBigger(n) {
    let arr = sortedDigits(n);
    let max = parseInt(arr.join(""), 10);

    for (var i = n + 1; i <= max; i++) {
        if (sortedDigits(i).every((x, j) => x === arr[j])) {
            return i;
        }
    }

    return -1;
}

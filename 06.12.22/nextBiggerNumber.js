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

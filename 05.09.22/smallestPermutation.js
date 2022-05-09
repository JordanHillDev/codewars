// Smallest Permutation

// Given a number, find the permutation with the smallest absolute value (no leading zeros).

// -20 => -20
// -32 => -23
// 0 => 0
// 10 => 10
// 29394 => 23499
// The input will always be an integer.

function minPermutation(n) {
    let numbers = String(Math.abs(n))
        .split("")
        .sort((a, b) => a - b);

    if (numbers[0] == 0) {
        const smallestNum = numbers.findIndex((el) => el > 0);
        numbers[0] = numbers[smallestNum];
        numbers[smallestNum] = 0;
    }

    return numbers.join("") * Math.sign(n);
}

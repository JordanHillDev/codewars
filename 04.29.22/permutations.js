// Permutations

// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) {
    if (string.length < 2) {
        return string;
    }

    let permutationsArr = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        let remainingChars =
            string.slice(0, i) + string.slice(i + 1, string.length);

        for (let perm of permutations(remainingChars)) {
            permutationsArr.push(char + perm);
        }
    }

    return permutationsArr.filter(
        (item, i) => permutationsArr.indexOf(item) === i
    );
}

// Which are in?

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

function inArray(array1, array2) {
    let included = [];

    for (let i = 0; i < array1.length; i++) {
        array2.forEach((word) => {
            if (word.includes(array1[i])) { included.push(array1[i]) }   
        });
    }

    let includedMap = included.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});

    return Object.keys(includedMap).sort(function (a, b) {
        if (includedMap[b]  <  includedMap[a]) return -1; 
        if (includedMap[b]  >  includedMap[a]) return 1;
        if (includedMap[a] === includedMap[b]) {
            if (a > b) return 1;
            if (a < b) return -1;
        }
    });
}

//   (function (acc, curr) {
//     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
//   }, {});

// Longest Common Prefix

// get array of word strings
// return longest length of letters that are in all words || ''

function longestCommonPrefix(strs) {
    let match = "";

    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every((word) => word[i] === strs[0][i])) match += strs[0][i];
        else {
            i += strs[0].length;
        }
    }
    return match;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");

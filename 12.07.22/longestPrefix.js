// given array of strings
//return the longest common group of letters that are in all words

function longestPrefix(strs) {
    // make variable to keep track of longest prefix
    // loop through strs[0]
    // update variable if every string includes prefix at beginning

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        let temp = prefix + strs[i];
        if (strs.every((word) => word.indexOf(temp) === 0)) prefix = temp;
    }

    return prefix;
}

console.log(longestPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestPrefix(["dog", "racecar", "car"]), "");

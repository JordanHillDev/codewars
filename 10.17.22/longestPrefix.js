// Longest Common Prefix

// get array of word strings
// return longest length of letters that are in all words || ''

function longestCommonPrefix(strs) {
    if(strs.length < 1) return '';

    strs = strs.sort((a, b) => b.length - a.length)

    let longest = ""

    let counter = 0;

    while(strs.every(word => word[counter] === strs[0][counter])) {
        longest += strs[0][counter]
        counter++
    }

    return longest
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), 'fl')
// String array duplicates

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Alternate capitalization

// Vowel consonant lexicon

function dup(s) {
    return s.map(word => {
        let splitWord = word.split('')
        let temp = []
        for(let i = 0; i < splitWord.length; i++) {
            temp.push(splitWord[i])
            while(splitWord[i] === splitWord[i + 1]) {
                ++i
            }
        }
        return temp.join('')
    })
}

// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

const isAnagram = function (test, original) {
    test = test.toLowerCase().split("");
    original = original.toLowerCase().split("");

    return (
        test.every((letter) => {
            if (original.includes(letter)) {
                original.splice(original.indexOf(letter), 1);
                return true;
            }
            return false;
        }) && original.length === 0
    );
};

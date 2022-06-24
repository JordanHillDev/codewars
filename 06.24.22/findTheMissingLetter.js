// Find the missing letter

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array) {
    const ALPHABET_LOWER = "abcdefghijklmnopqrstuvwxyz".split("");
    const ALPHABET_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const whichAlphabet = ALPHABET_LOWER.includes(array[0])
        ? ALPHABET_LOWER
        : ALPHABET_UPPER;
    const indexStart = whichAlphabet.indexOf(array[0]);
    let missingLetter;

    for (let i = 0; i < array.length; i++) {
        if (whichAlphabet[i + indexStart] !== array[i]) {
            missingLetter = whichAlphabet[i + indexStart];
            i = array.length;
        }
    }

    return missingLetter;
}

//solution using charCodeAt
function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
  }
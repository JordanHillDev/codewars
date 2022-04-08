// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    return str.split("").reduce((acc, curr) => {
        if (
            curr === "a" ||
            curr === "e" ||
            curr === "i" ||
            curr === "o" ||
            curr === "u"
        ) {
            return ++acc;
        } else {
            return acc;
        }
    }, 0);
}


// regex version

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

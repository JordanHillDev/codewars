// Not very secure

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const alphaUpper = alphabet.map((letter) => letter.toUpperCase());
    const nums = "0123456789".split("");
    const allChars = alphabet.concat(alphaUpper).concat(nums);

    return (
        string.length > 0 &&
        string.split("").every((el) => allChars.includes(el))
    );
}

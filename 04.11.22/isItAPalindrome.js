// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let lowerCaseString = x.toLowerCase();

    return lowerCaseString.split("").reverse().join("") === lowerCaseString;
}

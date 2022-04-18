// Simple string characters

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(s) {
    uppercase = s.match(/[A-Z]/g) || [];
    lowercase = s.match(/[a-z]/g) || [];
    numbers = s.match(/[0-9]/g) || [];
    specialChars = s.match(/\W/g) || [];

    return [
        uppercase.length,
        lowercase.length,
        numbers.length,
        specialChars.length,
    ];
}

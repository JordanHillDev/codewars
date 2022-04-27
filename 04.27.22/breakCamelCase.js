// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let completeString = string;
    let lettersChanged = 0;

    string.split("").forEach((letter, i) => {
        if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
            completeString =
                completeString.slice(0, i + lettersChanged) +
                " " +
                completeString.slice(i + lettersChanged);
            ++lettersChanged;
        }
    });

    return completeString;
}

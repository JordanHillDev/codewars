// Thinkful - List Drills: Longest word

// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7
// Do not modify the input list.

function longest(words) {
    console.log(words)
    return words.reduce((acc, curr) => {
        if (curr.length >= acc) {
            return (acc = curr.length);
        } else {
            return acc;
        }
    }, 0);
}

// Find the capitals

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = function (word) {
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return word.split("").reduce((acc, curr, i) => {
        if (capitals.includes(curr)) {
            acc.push(i);
        }
        return acc;
    }, []);
};

// Pair of gloves

// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

//P: array of strings of colors of gloves
//R: number of pairs that match up

function numberOfPairs(gloves) {
    const map = gloves.reduce((acc, curr) => {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});

    return Object.values(map).reduce((acc, curr) => {
        return (acc += Math.floor(curr / 2));
    }, 0);
}

//E:
numberOfPairs(["green", "green", "red"]); //=> 1
numberOfPairs(["green", "green", "red", "blue", "red"]); //=> 2

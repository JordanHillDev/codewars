// Adding Arrays

// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

// Examples:

// arrAdder([
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ]) // => "Just Live Life Man"

// arrAdder([
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"

// makes the array graph thing -- not finished

function arrMaker(arr) {
    let wordsInArr = arr.split(" ");
    let longestWordLength = wordsInArr.reduce((longest, curr) => {
        if (curr.length > longest.length) {
            return curr;
        } else {
            return longest;
        }
    }).length;
    let addedArr = [];

    for (let i = 0; i < longestWordLength; i++) {
        let currentArr = [];
        for (let j = 0; j < wordsInArr.length; j++) {
            wordsInArr[i][j]
                ? currentArr.push(wordsInArr[i][j])
                : currentArr.push("");
        }
        addedArr.push(currentArr);
    }

    return addedArr;
}


// actual solution  
function arrAdder(arr) {
    let string = ''

    for(let i = 0; i < arr[0].length; i++) {
        for(let j = 0; j < arr.length; j++) {
            string += arr[j][i]
        }
        string += ' '
    }

    return string.trim()
}
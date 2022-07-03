// WeIrD StRiNg CaSe

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
    return string
        .split(" ")
        .map((word) => {
            return word.split("").reduce((acc, curr, i) => {
                return (acc +=
                    i === 0 || i % 2 === 0 ? curr.toUpperCase() : curr);
            }, "");
        })
        .join(" ");
}



//easier and more scalable function
const toWeirdCase = function (string){
    return string.toLowerCase().split(' ').map(mapWord).join(' ');
  };
  
  const mapWord = function (word) {
    return word.split('').map(mapCharacter).join('');
  };
  
  const mapCharacter = function (letter, index) {
    return (index%2 === 0) ? letter.toUpperCase() : letter;
  };
// given string of different chars
// return string with each char that appears only once with '(' and ')' if more than once

function dupParens(str) {
    return str.split('').map((char) => {
        return str.indexOf(char) === str.lastIndexOf(char) ? '(' : ')'
    }).join('')
}

console.log(dupParens('apple'), '())((')
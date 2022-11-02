// given string of words
// return an array of sorted alaphabetically by last character
// if two words have same last char return in same order

function sortByLast(str) {
    // split str
    //sort array by last char
    return str.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
}

console.log(sortByLast('man i need a taxi up to ubud'), "['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']")
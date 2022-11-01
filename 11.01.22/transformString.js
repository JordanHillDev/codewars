// given string
// return string with every lowercase turned uppercase, reverse order of words ...containing multiple space and leading spaces



function transform(str) {
    // split str into array
    //map and change case of each letter
    // reverse order
    // return joined again
    return str.split(' ').map(word => {
        return word.split('').map(letter => {
            if(letter === letter.toUpperCase()) return letter.toLowerCase()
            else return letter.toUpperCase()
        }).join('')
    }).reverse().join(' ')
}

console.log(transform("Example Input"), 'iNPUT eXAMPLE')
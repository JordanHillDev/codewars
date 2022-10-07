// Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
    const even = []
    const odd = []

    s.split('').forEach((char, i) => {
        if(i % 2) {
            even.push(char)
            odd.push(char.toUpperCase())
        } else {
            even.push(char.toUpperCase())
            odd.push(char)
        }
    })

    return [even.join(''), odd.join('')]
}

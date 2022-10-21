// Given string of (), {}, and []
// return true if all brackets closed in correct order or false if not

function isValid(s) {
    let parens = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let curr = []

    for(let i = 0; i < s.length; i++) {
        if(Object.keys(parens).includes(s[i])) curr.push(s[i])
        else if (parens[curr.pop()] !== s[i]) return false
    }

    return curr.length === 0
}

console.log(isValid('()'), 'true')
console.log(isValid('())'), 'false')
console.log(isValid('({[]})'), 'true')
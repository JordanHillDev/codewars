// Roman To Integer

// given string of roman numerals
// return number that roman numerals represent

function romanToInt(s) {
    const numRepresented = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;

    let sSplit = s.split('')

    for(let i = 0; i < sSplit.length; i++) {
        let curr = numRepresented[sSplit[i]]
        let next = numRepresented[sSplit[i + 1]]
        
        if(curr < next) {
            total += next - curr
            i++
        } else {
            total += curr
        }
    }

    return total
}

console.log(romanToInt('XX'), 20)
console.log(romanToInt('IX'), 9)
console.log(romanToInt('MDXL'), 1540)


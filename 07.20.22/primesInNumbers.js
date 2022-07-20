// Primes in numbers

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n){
    let num = 2
    let map = {}
    while(n > 1) {
        if(Number.isInteger(n / num)) {
            map[num] ? map[num]++ : map[num] = 1
            n = n / num
        } else {
            num++
        }
    }

    let result = ''

    for(const[key, value] of Object.entries(map)) {
        result += value > 1 ? `(${key}**${value})` : `(${key})`
    }

    return result
}
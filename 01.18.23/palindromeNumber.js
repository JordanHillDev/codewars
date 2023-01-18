// given number

// return true if number is palindrome

function isPalindrome(x) {
    let xString = String(x)

    return xString === xString.split('').reverse().join('')
}

console.log(isPalindrome(343), true)
console.log(isPalindrome(123), false)
console.log(isPalindrome(-343), false)
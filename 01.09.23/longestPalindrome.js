// given string

// return length of longest substring that is the same in reverse

function longestPalindrome(s) {
    if (!s) return 0;
    for (let c = s.length; c > 0; c--) {
        for (let i = 0; i <= s.length - c; i++) {
            let check = s.substr(i, c);
            if (check === check.split("").reverse().join("")) return c;
        }
    }
}


// check = s.substr(0, 3) => 'aab'
// check = s.substr(1, 3) => 'ab'
// check = s.substr(2, 3) => 'b'

// check = s.substr(0, 2) => 'aa'
// check = s.substr(1, 2) => 'ab'
// check = s.substr(2, 2) => 'a'

// check = s.substr(0, 1) => 'a'
// check = s.substr(1, 1) => 'a'
// check = s.substr(2, 1) => 'b'
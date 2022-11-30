// given string that contains all vowels except one
// return index of vowel that is missing ['a', 'e', 'i', 'o', 'u']

function missingVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for(ea of vowels) {
        if(str.indexOf(ea) < 0) return vowels.indexOf(ea)
    }
}

console.log(missingVowel("John Doe hs seven red pples under his bsket"), 0)

// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

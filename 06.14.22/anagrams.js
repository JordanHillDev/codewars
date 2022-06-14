// Where my anagrams at?

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.

function anagrams(word, words) {
    
    
    function permutate(word) {
        if(word.length < 2) return word

        let permutationsArr = []

        for(let i = 0; i < word.length; i++) {
            let char = word[i]

            let remainingChars = word.slice(0, i) + word.slice(i + 1, word.length)

            for(let permutation of permutate(remainingChars)) {
                if(permutationsArr.indexOf(char + permutation) < 0) permutationsArr.push(char + permutation)
            }
        }
        return permutationsArr
    }

    const permArr = permutate(word)
    const included = []
    for(each of words) {
        if(permArr.includes(each)) {
            included.push(each)
        }
    }

    return included
}

//better solution
function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function(v) {return word == v.split('').sort().join('');});
  }
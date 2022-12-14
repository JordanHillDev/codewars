// given a string ransom note and a magazine string (ransom, magazine)

// return true or false if it's possible to cut words out of the magazine and make the ransom note

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function ransomNote(note, magazine) {
    const magazineHash = {}
    magazine = magazine.split(' ')
    for(ea of magazine) {
        magazineHash[ea] = magazineHash[ea] + 1 || 1
    }
    return note.split(' ').every(word => {
        if(magazineHash[word]) {
            magazineHash[word]--
            return true
        } else {
            return false
        }
    })
}

console.log(ransomNote('sit ad est sint', magazine), true)
console.log(ransomNote('sit ad est love', magazine), false)


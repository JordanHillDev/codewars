// Change it up

// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note:

// the alphabet should wrap around, so Z becomes A
// in this kata, y isn't considered as a vowel.
// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

function changer(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const vowels = "aeiou".split("");

    return str
        .toLowerCase()
        .split("")
        .map((letter) => {
            if (!alphabet.includes(letter)) {
                return letter;
            }

            letter = alphabet[(alphabet.indexOf(letter) + 1) % alphabet.length];

            return vowels.includes(letter) ? letter.toUpperCase() : letter;
        })
        .join("");
}

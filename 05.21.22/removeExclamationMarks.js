// Exclamation marks series #5: Remove all exclamation marks from the end of words

// Task
// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

function remove(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    return string.split("").reduce((acc, curr, i, arr) => {
        console.log(i, arr)
        if (curr === "!") {
            if (alphabet.includes(arr[i - 1].toLowerCase())) {
                arr.splice(i, 1);
                
                return acc;
            }
        }
        return acc + curr;
    }, "");
}

// better solution that actually works
function remove (string) {
    const words = string.split(' ');
  
    const wordsWithoutEndExclamation = words.map((word) => {
        let copyWord = word;
        while (copyWord[copyWord.length - 1] === '!') {
            copyWord = copyWord.slice(0, -1)
        }
        return copyWord
    })
  
    return wordsWithoutEndExclamation.join(' ');
  }
// Backspaces in string

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

//P: string of characters including '#'
//R: string that doesn't include  #'s and causes character before the # to be erased

function cleanString(s) {
    const solution = [];

    for (let i = 0; i < s.length; i++) {
        s[i] === "#" ? solution.pop() : solution.push(s[i]);
    }

    return solution.join('');
}

cleanString("abc#d##c"); // => 'ac'
cleanString("abc##d######"); // => ''
cleanString("######"); // => ''
cleanString(""); // => ''

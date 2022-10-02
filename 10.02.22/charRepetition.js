// Character with longest consecutive repetition

// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

// Happy coding! :)

function longestRepetition(s) {
    if(s.length === 0) return ['', 0]
    
    const longest = s.split("").reduce((acc, curr, i, arr) => {
        let temp = curr;
        while (curr === arr[i + 1]) {
            temp += curr;
            ++i;
        }

        if (temp.length > acc.length) return (acc = temp);
        return acc;
    }, "");

    return [longest[0], longest.length];
}

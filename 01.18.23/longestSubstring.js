// given string

// return longest substring with no repeating chars

var lengthOfLongestSubstring = function (s) {
    let longest = 0;

    for (let i = s.length; i > 0; i--) {
        for (j = i; j >= 0; j--) {
            let sub = s.substring(j, i);
            let unique = [...new Set(sub.split(""))];
            if (sub.length === unique.length && sub.length > longest)
                longest = sub.length;
        }
    }

    return longest;
};

function lengthOfLongestSubstring(str) {
    let a_pointer = 0;
    let b_pointer = 0;
    let max = 0;

    let charSet = new Set();

    while (b_pointer < str.length) {
        if (!charSet.has(str.charAt(b_pointer))) {
            charSet.add(str.charAt(b_pointer));
            b_pointer++;
            max = Math.max(charSet.size, max);
        } else {
            charSet.delete(str.charAt(a_pointer));
            a_pointer++;
        }
    }

    return max;
}

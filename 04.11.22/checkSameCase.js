// Check same case

// Write a function that will check if two given characters are the same case.

// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b) {
    if (/[a-zA-Z]/.test(a) && /[a-zA-Z]/.test(b)) {
        if (
            (/[a-z]/.test(a) && /[a-z]/.test(b)) ||
            (/[A-Z]/.test(a) && /[A-Z]/.test(b))
        ) {
            return 1;
        } else {
            return 0;
        }
    }
    return -1;
}

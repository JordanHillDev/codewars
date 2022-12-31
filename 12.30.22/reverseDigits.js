// given non-negative number

// return digits in array in reverse order

function digitize(n) {
    return n
        .toString()
        .split("")
        .reverse()
        .map((i) => +i);
}

// receive array of three numbers

// returns index of number that is between other two elements

function middle(arr) {
    const sorted = arr.sort((a, b) => a - b);

    return sorted[1];
}

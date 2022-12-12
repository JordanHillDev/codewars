// given integer up to 16 digits
// return true if card is valid

function validate(n) {
    // turn n into string and split into array and reverse
    const nArray = String(n).split("").reverse();
    // loop over every other digit starting from right

    for (let i = 1; i < nArray.length; i += 2) {
        nArray[i] = +nArray[i] * 2 > 9 ? +nArray[i] * 2 - 9 : +nArray[i] * 2;
    }

    const sumOfDigits = nArray.reduce((acc, curr) => acc + +curr, 0);

    return sumOfDigits % 10 === 0;
}

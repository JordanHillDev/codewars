// get number

// return sum of absoute value of digits

function sumDigits(number) {
    return String(number)
        .split("")
        .filter((num) => Number.isInteger(+num))
        .reduce((acc, curr) => +acc + +curr, 0);
}

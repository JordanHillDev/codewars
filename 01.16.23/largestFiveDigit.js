// given number > 5 digits

// return largest sequence of 5 digits in a row

function solution(digits) {
    let strDigits = String(digits);
    let largest;
    for (let i = 0; i < strDigits.length; i++) {
        let seq = strDigits.slice(i, i + 5);
        if (!largest) largest = seq;
        if (+seq > +largest) largest = seq;
    }

    return +largest;
}

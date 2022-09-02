// Dashatize it

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

//P: integer
//R: string with dash marks before and after odd numbers but none at beginning or end of string

function dashatize(num) {
    if(!Number.isInteger(num)) return 'NaN'
    const numStringArr = String(Math.abs(num)).split("");
    const grouped = [];

    let temp = "";

    for (let i = 0; i < numStringArr.length; i++) {
        if (+numStringArr[i] % 2 === 0) {
            temp += numStringArr[i];
            if (i === numStringArr.length - 1) grouped.push(temp);
        }

        if (+numStringArr[i] % 2) {
            if (temp.length > 0) grouped.push(temp);
            temp = "";
            grouped.push(numStringArr[i]);
        }
    }

    return grouped.join('-')
}

dashatize(274); //-> '2-7-4'
dashatize(6815); //-> '68-1-5'
